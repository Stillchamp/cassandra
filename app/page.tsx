'use client'

import { Button } from '@/components/ui/button'
import { Nav } from '@/components/nav'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Zap,
  BarChart3,
  Lightbulb,
  Shield,
  Gauge,
} from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'Automated Analysis',
    description:
      'Comprehensive quality assessment across multiple dimensions with intelligent pipeline processing',
  },
  {
    icon: BarChart3,
    title: 'Detailed Reports',
    description:
      'In-depth quality metrics, prompt comparisons, and actionable insights for optimization',
  },
  {
    icon: Lightbulb,
    title: 'Smart Insights',
    description:
      'AI-powered recommendations based on detected patterns and quality indicators',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Secure handling of sensitive conversations and data with enterprise-grade protection',
  },
  {
    icon: Gauge,
    title: 'Performance Metrics',
    description:
      'Real-time monitoring and tracking of quality metrics across all test cases',
  },
  {
    icon: Zap,
    title: 'Multi-Model Pipeline',
    description:
      'Harness the power of multiple AI models for comprehensive quality analysis',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              AI Quality Engineering Platform
            </div>
            <h1 className="text-balance mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
              Enterprise-Grade Quality for AI Applications
            </h1>
            <p className="text-balance mb-8 text-xl text-muted-foreground sm:text-lg">
              Cassandra provides comprehensive quality assurance for your AI systems. Analyze
              conversations, evaluate prompts, and generate detailed reports with advanced
              multi-model intelligence.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/analyze">
                <Button size="lg" className="px-8">
                  Start Analysis
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-24 max-w-4xl"
        >
          <div className="rounded-lg border border-border/40 bg-card/50 p-8 backdrop-blur">
            <div className="grid grid-cols-6 gap-4 text-center">
              {['Input', 'Parse', 'Analyze', 'Evaluate', 'Score', 'Report'].map(
                (stage, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-primary/10 text-sm font-semibold text-primary"
                    >
                      {idx + 1}
                    </motion.div>
                    <p className="text-sm font-medium text-muted-foreground">{stage}</p>
                    {idx < 5 && (
                      <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/40 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl font-bold">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for comprehensive AI quality assurance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group rounded-lg border border-border/40 bg-card/50 p-8 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold"
          >
            Ready to Improve Your AI Quality?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-muted-foreground"
          >
            Analyze your first AI conversation in minutes and see comprehensive quality metrics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/analyze">
              <Button size="lg" className="px-8">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Cassandra AI Quality Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
