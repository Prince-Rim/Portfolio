import React, { useState, useEffect, useMemo, useRef } from 'react';
import fallbackData from '../contributions-data.json';

interface DayContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionData {
  total: { [key: string]: number };
  contributions: DayContribution[];
}

interface Props {
  username: string;
  githubUrl: string;
  isDark: boolean;
}

// GitHub's official contribution color palettes
const GITHUB_THEMES = {
  dark: {
    level0: '#161b22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
    emptyBorder: 'rgba(255, 255, 255, 0.05)',
    filledBorder: 'rgba(255, 255, 255, 0.03)',
    cardBg: '#0d1117',
    cardBorder: '#30363d',
    textColor: '#7d8590',
    headerColor: '#f0f6fc',
    tooltipBg: '#1c2128',
    tooltipBorder: '#30363d'
  },
  light: {
    level0: '#ebedf0',
    level1: '#9be9a8',
    level2: '#40c463',
    level3: '#30a14e',
    level4: '#216e39',
    emptyBorder: 'rgba(27, 31, 35, 0.06)',
    filledBorder: 'rgba(27, 31, 35, 0.06)',
    cardBg: '#ffffff',
    cardBorder: '#d0d7de',
    textColor: '#57606a',
    headerColor: '#1f2328',
    tooltipBg: '#24292f',
    tooltipBorder: '#d0d7de'
  }
};

const MONTH_NAMES = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

function formatContributionDate(dateStr: string): string {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const date = new Date(year, month, day);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export const GitHubContributionGraph: React.FC<Props> = ({ username, githubUrl, isDark }) => {
  const [data, setData] = useState<ContributionData>(fallbackData as unknown as ContributionData);
  const [tooltip, setTooltip] = useState<{ count: number; date: string; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = isDark ? GITHUB_THEMES.dark : GITHUB_THEMES.light;

  // Live fetch from open CORS-enabled endpoint with instant fallback
  useEffect(() => {
    let isMounted = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch live contribution data');
        return res.json();
      })
      .then((json: ContributionData) => {
        if (isMounted && json && json.contributions && json.contributions.length > 0) {
          setData(json);
        }
      })
      .catch(() => {
        // Retain fallback data gracefully
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Compute total contributions
  const totalContributions = useMemo(() => {
    if (data?.total && typeof data.total.lastYear === 'number') {
      return data.total.lastYear;
    }
    return data?.contributions?.reduce((acc, curr) => acc + (curr.count || 0), 0) || 1027;
  }, [data]);

  // Structure contributions into 53 columns (weeks) of 7 days (Sunday to Saturday)
  const { weeks, monthLabels } = useMemo(() => {
    const list = data?.contributions || [];
    if (list.length === 0) return { weeks: [], monthLabels: [] };

    const computedWeeks: (DayContribution | null)[][] = [];
    let currentWeek: (DayContribution | null)[] = [];

    // Pad first week if not starting on Sunday
    const firstDate = new Date(list[0].date + 'T00:00:00');
    const firstDayOfWeek = firstDate.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    list.forEach((day) => {
      if (currentWeek.length === 7) {
        computedWeeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(day);
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      computedWeeks.push(currentWeek);
    }

    // Determine month label positions
    const months: { weekIndex: number; label: string }[] = [];
    let lastMonth = -1;

    computedWeeks.forEach((week, wIdx) => {
      const firstValid = week.find((d) => d !== null);
      if (firstValid) {
        const parts = firstValid.date.split('-');
        const m = parseInt(parts[1], 10) - 1;
        if (m !== lastMonth) {
          months.push({
            weekIndex: wIdx,
            label: MONTH_NAMES[m % 12] || 'Jan'
          });
          lastMonth = m;
        }
      }
    });

    return { weeks: computedWeeks, monthLabels: months };
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl border p-4 sm:p-6 transition-all duration-300 relative select-none"
      style={{
        backgroundColor: colors.cardBg,
        borderColor: colors.cardBorder
      }}
    >
      {/* GitHub Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: colors.cardBorder }}>
        <div className="flex items-center gap-2.5">
          <span className="font-semibold text-sm sm:text-base tracking-tight" style={{ color: colors.headerColor }}>
            {totalContributions.toLocaleString()} contributions in the last year
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-1 font-medium transition-colors"
            style={{ color: colors.textColor }}
          >
            <span>Contribution settings</span>
            <span className="text-[10px]">▾</span>
          </a>
        </div>
      </div>

      {/* SVG Contribution Heatmap Grid */}
      <div className="overflow-x-auto pb-2 pt-1 w-full flex justify-center">
        <div className="min-w-[725px] relative">
          <svg
            viewBox="0 0 725 118"
            className="w-full max-w-[800px] h-auto block"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            {/* Month Header Labels */}
            {monthLabels.map(({ weekIndex, label }, idx) => (
              <text
                key={idx}
                x={30 + weekIndex * 13}
                y={12}
                fill={colors.textColor}
                fontSize="10"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
                textAnchor="start"
              >
                {label}
              </text>
            ))}

            {/* Weekday Row Labels (Mon, Wed, Fri) */}
            <text
              x={2}
              y={41}
              fill={colors.textColor}
              fontSize="9"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            >
              Mon
            </text>
            <text
              x={2}
              y={67}
              fill={colors.textColor}
              fontSize="9"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            >
              Wed
            </text>
            <text
              x={2}
              y={93}
              fill={colors.textColor}
              fontSize="9"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            >
              Fri
            </text>

            {/* 53 Columns x 7 Rows Grid of Contributions */}
            {weeks.map((week, wIdx) =>
              week.map((day, dIdx) => {
                if (!day) return null;

                const color =
                  day.level === 0
                    ? colors.level0
                    : day.level === 1
                    ? colors.level1
                    : day.level === 2
                    ? colors.level2
                    : day.level === 3
                    ? colors.level3
                    : colors.level4;

                const border = day.level === 0 ? colors.emptyBorder : colors.filledBorder;

                return (
                  <rect
                    key={`${wIdx}-${dIdx}`}
                    x={30 + wIdx * 13}
                    y={22 + dIdx * 13}
                    width={10}
                    height={10}
                    rx={2}
                    ry={2}
                    fill={color}
                    stroke={border}
                    strokeWidth={1}
                    className="cursor-pointer transition-transform hover:scale-125 origin-center"
                    style={{
                      transformOrigin: `${30 + wIdx * 13 + 5}px ${22 + dIdx * 13 + 5}px`
                    }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const parent = containerRef.current?.getBoundingClientRect();
                      if (parent) {
                        setTooltip({
                          count: day.count,
                          date: day.date,
                          x: rect.left - parent.left + 5,
                          y: rect.top - parent.top - 8
                        });
                      }
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    <title>{`${day.count === 0 ? 'No' : day.count} contribution${day.count === 1 ? '' : 's'} on ${formatContributionDate(day.date)}`}</title>
                  </rect>
                );
              })
            )}
          </svg>

          {/* Floating Interactive Tooltip */}
          {tooltip && (
            <div
              className="absolute pointer-events-none z-30 px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap shadow-xl -translate-x-1/2 -translate-y-full animate-in fade-in zoom-in-95 duration-150"
              style={{
                left: `${tooltip.x}px`,
                top: `${tooltip.y}px`,
                backgroundColor: colors.tooltipBg,
                color: colors.headerColor,
                border: `1px solid ${colors.tooltipBorder}`
              }}
            >
              <span className="font-bold">
                {tooltip.count === 0 ? 'No contributions' : `${tooltip.count} contribution${tooltip.count === 1 ? '' : 's'}`}
              </span>
              {' '}on {formatContributionDate(tooltip.date)}
            </div>
          )}
        </div>
      </div>

      {/* GitHub Footer Bar: Learn Link + 5-Level Color Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 text-[11px] font-mono border-t" style={{ borderColor: colors.cardBorder }}>
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
          target="_blank"
          rel="noreferrer"
          className="hover:underline transition-colors"
          style={{ color: colors.textColor }}
        >
          Learn how we count contributions
        </a>

        <div className="flex items-center gap-2" style={{ color: colors.textColor }}>
          <span>Less</span>
          <div className="flex gap-1 items-center">
            <span
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: colors.level0, border: `1px solid ${colors.emptyBorder}` }}
              title="0 contributions"
            />
            <span
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: colors.level1 }}
              title="1-3 contributions"
            />
            <span
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: colors.level2 }}
              title="4-9 contributions"
            />
            <span
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: colors.level3 }}
              title="10-19 contributions"
            />
            <span
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: colors.level4 }}
              title="20+ contributions"
            />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
