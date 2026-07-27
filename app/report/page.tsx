'use client'

import { Nav } from '@/components/nav'
import { motion } from 'framer-motion'
import {
  BarChart3,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { QualityScoreCircle } from '@/components/report/quality-score-circle'
import { SummaryCard } from '@/components/report/summary-card'
import { ComparisonTable } from '@/components/report/comparison-table'
import { TestCaseCard } from '@/components/report/test-case-card'
import { QualityReportTable } from '@/components/report/quality-report-table'
import { PipelineBreakdown } from '@/components/report/pipeline-breakdown'

const summaryData = [
  { label: 'Overall Quality Score', value: '87.5%', trend: '+12%', icon: TrendingUp },
  { label: 'Conversations Analyzed', value: '1', trend: 'New', icon: CheckCircle2 },
  { label: 'Quality Issues Found', value: '3', trend: '-5', icon: AlertCircle },
  { label: 'Optimization Opportunities', value: '8', trend: '+3', icon: BarChart3 },
  { label: 'Model Agreement', value: '94%', trend: '+2%', icon: CheckCircle2 },
  { label: 'Recommendations', value: '12', trend: 'Ready', icon: AlertCircle },
]

const testCases = [
  {
    id: 1,
    title: 'Response Accuracy',
    description: 'Evaluates the factual accuracy of AI responses',
    score: 92,
    status: 'excellent',
  },
  {
    id: 2,
    title: 'Coherence Quality',
    description: 'Measures logical flow and consistency',
    score: 85,
    status: 'good',
  },
  {
    id: 3,
    title: 'Safety Compliance',
    description: 'Checks for harmful or unsafe content',
    score: 91,
    status: 'excellent',
  },
  {
    id: 4,
    title: 'Relevance Check',
    description: 'Validates responses match user intent',
    score: 88,
    status: 'good',
  },
]

const qualityReportData = [
  {
    category: 'Content Quality',
    score: 89,
    metrics: ['Clarity', 'Accuracy', 'Completeness'],
  },
  {
    category: 'Response Safety',
    score: 91,
    metrics: ['Harmlessness', 'Appropriateness', 'Bias Detection'],
  },
  {
    category: 'User Experience',
    score: 84,
    metrics: ['Relevance', 'Helpfulness', 'Engagement'],
  },
  {
    category: 'Performance',
    score: 86,
    metrics: ['Speed', 'Reliability', 'Consistency'],
  },
]

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-start justify-between"
        >
          <div>
            <h1 className="mb-2 text-4xl font-bold">Quality Analysis Report</h1>
            <p className="text-muted-foreground">
              Comprehensive AI quality metrics and recommendations
            </p>
          </div>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </motion.div>

        {/* Quality Score + Summary Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 grid gap-6 lg:grid-cols-2"
        >
          {/* Quality Score Circle */}
          <div className="rounded-lg border border-border/40 bg-card/50 p-8 backdrop-blur">
            <QualityScoreCircle score={87.5} />
          </div>

          {/* Summary Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {summaryData.slice(0, 4).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <SummaryCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 grid gap-4 sm:grid-cols-2"
        >
          {summaryData.slice(4).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.05 }}
            >
              <SummaryCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Comparisons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 grid gap-6 lg:grid-cols-2"
        >
          <div className="rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur">
            <h3 className="mb-4 text-lg font-semibold">Prompt Comparison</h3>
            <ComparisonTable type="prompt" />
          </div>

          <div className="rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur">
            <h3 className="mb-4 text-lg font-semibold">Conversation Analysis</h3>
            <ComparisonTable type="conversation" />
          </div>
        </motion.div>

        {/* Test Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="mb-4 text-lg font-semibold">Quality Test Cases</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testCases.map((testCase, idx) => (
              <motion.div
                key={testCase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
              >
                <TestCaseCard {...testCase} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Report Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8 rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur"
        >
          <h3 className="mb-4 text-lg font-semibold">Detailed Quality Metrics</h3>
          <QualityReportTable data={qualityReportData} />
        </motion.div>

        {/* Pipeline Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur"
        >
          <h3 className="mb-4 text-lg font-semibold">Multi-Model Pipeline Analysis</h3>
          <PipelineBreakdown />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="mb-2 text-lg font-semibold">Ready for More Analysis?</h3>
          <p className="mb-6 text-muted-foreground">
            Analyze another conversation to compare quality metrics and track improvements
          </p>
          <Button>Analyze Another Conversation</Button>
        </motion.div>
      </div>
    </div>
  )
}
