import { motion } from 'framer-motion'

interface QualityScoreCircleProps {
  score: number
}

export function QualityScoreCircle({ score }: QualityScoreCircleProps) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (score / 100) * circumference

  const getScoreColor = (s: number) => {
    if (s >= 90) return 'text-emerald-500'
    if (s >= 80) return 'text-blue-500'
    if (s >= 70) return 'text-amber-500'
    return 'text-red-500'
  }

  const getScoreLabel = (s: number) => {
    if (s >= 90) return 'Excellent'
    if (s >= 80) return 'Very Good'
    if (s >= 70) return 'Good'
    return 'Needs Improvement'
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-48 w-48">
        <svg className="h-full w-full" viewBox="0 0 120 120">
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/30"
          />

          {/* Progress Circle */}
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut' }}
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeLinecap="round"
            className={getScoreColor(score)}
            style={{
              transformOrigin: '60px 60px',
              transform: 'rotate(-90deg)',
            }}
          />
        </svg>

        {/* Score Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-1"
        >
          <span className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}%</span>
          <span className="text-xs font-medium text-muted-foreground">Quality Score</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="text-center"
      >
        <p className="mb-1 text-sm font-semibold text-foreground">Status</p>
        <p className={`text-lg font-bold ${getScoreColor(score)}`}>{getScoreLabel(score)}</p>
      </motion.div>
    </div>
  )
}
