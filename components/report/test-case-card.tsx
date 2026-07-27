import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'

interface TestCaseCardProps {
  id: number
  title: string
  description: string
  score: number
  status: 'excellent' | 'good' | 'warning' | 'critical'
}

export function TestCaseCard({
  id,
  title,
  description,
  score,
  status,
}: TestCaseCardProps) {
  const getStatusColor = (s: string) => {
    switch (s) {
      case 'excellent':
        return 'bg-emerald-500/20 border-emerald-500/50 text-emerald-700 dark:text-emerald-400'
      case 'good':
        return 'bg-blue-500/20 border-blue-500/50 text-blue-700 dark:text-blue-400'
      case 'warning':
        return 'bg-amber-500/20 border-amber-500/50 text-amber-700 dark:text-amber-400'
      default:
        return 'bg-red-500/20 border-red-500/50 text-red-700 dark:text-red-400'
    }
  }

  const getScoreColor = (s: number) => {
    if (s >= 90) return 'text-emerald-500'
    if (s >= 80) return 'text-blue-500'
    if (s >= 70) return 'text-amber-500'
    return 'text-red-500'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-border/40 bg-card/50 p-4 backdrop-blur transition-all hover:border-primary/50"
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        {status === 'excellent' || status === 'good' ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
        ) : (
          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
        )}
      </div>

      <div className="mb-3 flex items-end justify-between">
        <span className={`text-lg font-bold ${getScoreColor(score)}`}>{score}%</span>
        <span
          className={`inline-block rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(status)}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${
            score >= 90
              ? 'bg-emerald-500'
              : score >= 80
                ? 'bg-blue-500'
                : score >= 70
                  ? 'bg-amber-500'
                  : 'bg-red-500'
          }`}
        />
      </div>
    </motion.div>
  )
}
