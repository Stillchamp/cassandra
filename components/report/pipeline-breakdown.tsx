import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const pipelineData = [
  { model: 'Gemma-7B', score: 87, time: '1.2s' },
  { model: 'Gemma-13B', score: 89, time: '1.8s' },
  { model: 'Gemma-27B', score: 91, time: '3.1s' },
  { model: 'Ensemble', score: 89, time: '2.0s' },
]

export function PipelineBreakdown() {
  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pipelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
            <XAxis dataKey="model" stroke="currentColor" opacity={0.5} />
            <YAxis stroke="currentColor" opacity={0.5} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: `1px solid hsl(var(--border))`,
                borderRadius: '8px',
                color: 'hsl(var(--foreground))',
              }}
            />
            <Bar dataKey="score" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Model Details */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pipelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-lg border border-border/40 bg-muted/30 p-4"
          >
            <p className="mb-2 text-sm font-medium text-muted-foreground">{item.model}</p>
            <div className="mb-3 flex items-end gap-2">
              <span className="text-2xl font-bold text-primary">{item.score}</span>
              <span className="text-xs text-muted-foreground">/100</span>
            </div>
            <p className="text-xs text-muted-foreground">Processing: {item.time}</p>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-lg bg-primary/5 p-4"
      >
        <p className="text-sm text-foreground">
          <strong>Model Agreement:</strong> 94% - All models agree on quality assessment with
          minimal variance. The ensemble approach provides robust evaluation combining strengths of
          multiple model architectures.
        </p>
      </motion.div>
    </div>
  )
}
