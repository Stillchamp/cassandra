import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SummaryCardProps {
  label: string
  value: string
  trend: string
  icon: LucideIcon
}

export function SummaryCard({ label, value, trend, icon: Icon }: SummaryCardProps) {
  const isPositive = trend.startsWith('+') && !trend.includes('New') && !trend.includes('Ready')

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-border/40 bg-card/50 p-4 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={`text-xs font-medium ${
            isPositive
              ? 'text-emerald-600 dark:text-emerald-400'
              : trend.includes('New') || trend.includes('Ready')
                ? 'text-blue-600 dark:text-blue-400'
                : trend.startsWith('-')
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-amber-600 dark:text-amber-400'
          }`}
        >
          {trend}
        </span>
      </div>
      <p className="mb-1 text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  )
}
