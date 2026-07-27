import { motion } from 'framer-motion'

interface QualityReportData {
  category: string
  score: number
  metrics: string[]
}

interface QualityReportTableProps {
  data: QualityReportData[]
}

export function QualityReportTable({ data }: QualityReportTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Category</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Score</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Key Metrics</th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const getScoreColor = (score: number) => {
              if (score >= 90) return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
              if (score >= 80) return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
              if (score >= 70) return 'bg-amber-500/10 text-amber-700 dark:text-amber-400'
              return 'bg-red-500/10 text-red-700 dark:text-red-400'
            }

            const getStatus = (score: number) => {
              if (score >= 90) return 'Excellent'
              if (score >= 80) return 'Very Good'
              if (score >= 70) return 'Good'
              return 'Needs Improvement'
            }

            const getStatusBadgeColor = (score: number) => {
              if (score >= 90) return 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
              if (score >= 80) return 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
              if (score >= 70) return 'bg-amber-500/20 text-amber-700 dark:text-amber-400'
              return 'bg-red-500/20 text-red-700 dark:text-red-400'
            }

            return (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-border/40 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3 font-medium text-foreground">{row.category}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 font-semibold ${getScoreColor(row.score)}`}>
                      {row.score}%
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  <div className="flex flex-wrap gap-1">
                    {row.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusBadgeColor(row.score)}`}
                  >
                    {getStatus(row.score)}
                  </span>
                </td>
              </motion.tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
