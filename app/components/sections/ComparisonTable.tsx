export default function ComparisonTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: [string, string, string][];
}) {
  return (
    <div className="not-prose overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[560px] border-collapse text-[13px] sm:text-[14px]">
        <thead>
          <tr className="bg-white/[0.04]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-3 sm:px-4 py-3 text-left font-semibold text-[#f3f5ff] whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/[0.06]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={
                    j === 0
                      ? "px-3 sm:px-4 py-3 font-medium text-[var(--color-ink-200)]"
                      : "px-3 sm:px-4 py-3 text-[var(--color-ink-400)]"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
