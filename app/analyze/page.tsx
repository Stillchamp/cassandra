'use client'

import { useState } from 'react'
import { Nav } from '@/components/nav'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { analyzeAssistant } from "@/lib/api";

const stages = [
  { id: 'input', label: 'Input', description: 'Receiving data' },
  { id: 'parse', label: 'Parse', description: 'Parsing input' },
  { id: 'analyze', label: 'Analyze', description: 'Analyzing quality' },
  { id: 'evaluate', label: 'Evaluate', description: 'Evaluating metrics' },
  { id: 'score', label: 'Score', description: 'Computing scores' },
  { id: 'report', label: 'Report', description: 'Generating report' },
]

export default function AnalyzePage() {

  const router = useRouter()

  const [systemPrompt, setSystemPrompt] = useState('')
  const [conversation, setConversation] = useState('')
  const [assistantResponse, setAssistantResponse] = useState('')

  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [completedStages, setCompletedStages] = useState<string[]>([])
  const [error, setError] = useState("")

  const handleAnalyze = async () => {

    if (
      !systemPrompt.trim() ||
      !conversation.trim() ||
      !assistantResponse.trim()
    ) {
      alert("Please fill in all fields")
      return
    }

    setIsAnalyzing(true)
    setCompletedStages([])
    setError("")

    try {

      const stagesDelay = async (stageId: string) => {

        setCompletedStages(prev => [...prev, stageId])

        await new Promise(resolve =>
          setTimeout(resolve, 300)
        )

      }

      await stagesDelay("input")

      const payload = {

        system_prompt: systemPrompt,

        conversation: [

          {
            role: "user",
            content: conversation,
          },

          {
            role: "assistant",
            content: assistantResponse,
          }

        ]

      }

      await stagesDelay("parse")

      const result = await analyzeAssistant(payload)

      await stagesDelay("analyze")
      await stagesDelay("evaluate")
      await stagesDelay("score")
      await stagesDelay("report")

      sessionStorage.setItem(
        "cassandra-report",
        JSON.stringify(result)
      )

      router.push("/report")

    } catch (err: any) {

      console.error(err)

      setError(
        err.message ||
        "Unable to connect to backend."
      )

    } finally {

      setIsAnalyzing(false)

    }

  }

  return (

    <div className="min-h-screen bg-background">

      <Nav />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >

          <h1 className="mb-2 text-4xl font-bold">
            Analyze Quality
          </h1>

          <p className="text-lg text-muted-foreground">
            Submit the system prompt, user message and assistant response for comprehensive quality analysis.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >

            <div>

              <label className="mb-2 block text-sm font-semibold">
                System Prompt
              </label>

              <textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                placeholder="Enter the system prompt..."
                className="h-40 w-full rounded-lg border border-border bg-card p-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isAnalyzing}
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold">
                User Message
              </label>

              <textarea
                value={conversation}
                onChange={(e) => setConversation(e.target.value)}
                placeholder="Enter the user's message..."
                className="h-40 w-full rounded-lg border border-border bg-card p-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isAnalyzing}
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Assistant Response
              </label>

              <textarea
                value={assistantResponse}
                onChange={(e) => setAssistantResponse(e.target.value)}
                placeholder="Enter the assistant response..."
                className="h-40 w-full rounded-lg border border-border bg-card p-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isAnalyzing}
              />

            </div>

            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              size="lg"
              className="w-full"
            >

              {isAnalyzing
                ? "Analyzing..."
                : "Analyze"}

            </Button>

            {error && (

              <p className="mt-4 text-center text-sm text-red-500">
                {error}
              </p>

            )}

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start"
          >

            <div className="rounded-lg border border-border/40 bg-card/50 p-8 backdrop-blur">

              <h3 className="mb-8 text-lg font-semibold">
                Processing Pipeline
              </h3>

              <div className="space-y-6">

                {stages.map((stage, idx) => {

                  const isCompleted =
                    completedStages.includes(stage.id)

                  const isActive =
                    isAnalyzing &&
                    completedStages.length === idx &&
                    idx < stages.length

                  return (

                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4"
                    >

                      {isCompleted ? (

                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200
                          }}
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                        >

                          <CheckCircle2 className="h-5 w-5 text-emerald-500"/>

                        </motion.div>

                      ) : isActive ? (

                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center"
                        >

                          <Zap className="h-5 w-5 text-primary"/>

                        </motion.div>

                      ) : (

                        <div className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-border"/>

                      )}

                      <div>

                        <p className={`font-semibold transition-colors ${
                          isCompleted || isActive
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}>
                          {stage.label}
                        </p>

                        <p className={`text-sm transition-colors ${
                          isCompleted || isActive
                            ? "text-muted-foreground"
                            : "text-muted-foreground/60"
                        }`}>
                          {stage.description}
                        </p>

                      </div>

                    </motion.div>

                  )

                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>

  )

}