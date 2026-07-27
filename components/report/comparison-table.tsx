import { motion } from 'framer-motion'

interface ComparisonTableProps {
  type: 'prompt' | 'conversation'
}

const promptData = [
  { metric: 'Clarity', value: '92%', status: 'excellent' },
  { metric: 'Specificity', value: '85%', status: 'good' },
  { metric: 'Completeness', value: '88%', status: 'good' },
  { metric: 'Ambiguity', value: '8%', status: 'excellent' },
]

const conversationData = [
  { metric: 'Response Time', value: '1.2s', status: 'excellent' },
  { metric: 'Relevance', value: '89%', status: 'good' },
  { metric: 'Accuracy', value: '92%', status: 'excellent' },
  { metric: 'Safety', value: '91%', status: 'excellent' },
]

export function ComparisonTable({ type }: ComparisonTableProps) {
  const data = type === 'prompt' ? promptData : conversationData

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-2 text-left font-semibold text-foreground">Metric</th>
            <th className="px-4 py-2 text-right font-semibold text-foreground">Score</th>
            <th className="px-4 py-2 text-right font-semibold text-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <motion.tr
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border-b border-border/40 hover:bg-primary/5 transition-colors"
            >
              <td className="px-4 py-3 text-foreground">{row.metric}</td>
              <td className="px-4 py-3 text-right font-semibold text-foreground">{row.value}</td>
              <td className="px-4 py-3 text-right">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    row.status === 'excellent'
                      ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                      : row.status === 'good'
                        ? 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
                        : 'bg-amber-500/20 text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
