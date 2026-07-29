'use client'

import { useEffect, useState } from "react";
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
import { QualityReportTable } from '@/components/report/quality-report-table'
import { PipelineBreakdown } from '@/components/report/pipeline-breakdown'


export default function ReportPage() {

  const [report, setReport] = useState<any>(null)


  useEffect(() => {

    const storedReport = sessionStorage.getItem(
      "cassandra-report"
    )

    if (storedReport) {
      setReport(JSON.parse(storedReport))
    }

  }, [])



  if (!report) {

    return (
      <div className="min-h-screen bg-background">

        <Nav />

        <div className="flex h-screen items-center justify-center">

          <h2 className="text-2xl font-bold">
            No report found.
          </h2>

        </div>

      </div>
    )

  }



  const confidence =
    Math.round((report.confidence || 0) * 100)



  const score =
    report.quality_score ||
    confidence ||
    0



  const summaryData = [

    {
      label: "Verdict",
      value: report.verdict || "Unknown",
      trend: report.severity || "N/A",
      icon: CheckCircle2,
    },

    {
      label: "Confidence",
      value: `${confidence}%`,
      trend: "Gemma",
      icon: TrendingUp,
    },

    {
      label: "Issue Detected",
      value: report.issue || "None",
      trend: "Analysis",
      icon: AlertCircle,
    },

    {
      label: "Quality Score",
      value: `${score}%`,
      trend: "Pipeline",
      icon: BarChart3,
    },

    {
      label: "Severity",
      value: report.severity || "Unknown",
      trend: "Result",
      icon: AlertCircle,
    },

    {
      label: "Recommendation",
      value: report.recommendation 
        ? "Available"
        : "None",
      trend: "Generated",
      icon: CheckCircle2,
    }

  ]



  const qualityReportData = [

    {
      category: "AI Response Quality",
      score: score,
      metrics: [
        "Accuracy",
        "Consistency",
        "Reliability"
      ],
    },

    {
      category: "Safety Analysis",
      score: confidence,
      metrics: [
        "Safety",
        "Hallucination Detection",
        "Risk"
      ],
    }

  ]



  return (

    <div className="min-h-screen bg-background">

      <Nav />


      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">


        {/* Header */}

        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="mb-8 flex items-start justify-between"

        >

          <div>

            <h1 className="mb-2 text-4xl font-bold">

              Quality Analysis Report

            </h1>


            <p className="text-muted-foreground">

              Cassandra AI Quality Engineering Analysis

            </p>


          </div>



          <Button variant="outline">

            <Download className="mr-2 h-4 w-4"/>

            Export Report

          </Button>


        </motion.div>




        {/* Score + Summary */}


        <div className="mb-8 grid gap-6 lg:grid-cols-2">


          <div className="rounded-lg border border-border/40 bg-card/50 p-8">

            <QualityScoreCircle score={score}/>

          </div>



          <div className="grid gap-4 sm:grid-cols-2">


            {summaryData.map((item,index)=>(

              <SummaryCard

                key={index}

                {...item}

              />

            ))}


          </div>


        </div>






        {/* AI Comparison */}


        <div className="mb-8 grid gap-6 lg:grid-cols-2">


          <div className="rounded-lg border border-border/40 bg-card/50 p-6">


            <h3 className="mb-4 text-lg font-semibold">

              Improved Prompt

            </h3>



            <div className="rounded-md bg-muted p-4 whitespace-pre-wrap text-sm">

              {
                report.improved_prompt ||
                "No improved prompt generated."
              }

            </div>


          </div>





          <div className="rounded-lg border border-border/40 bg-card/50 p-6">


            <h3 className="mb-4 text-lg font-semibold">

              Better Response

            </h3>


            <div className="rounded-md bg-muted p-4 whitespace-pre-wrap text-sm">

              {
                report.better_response ||
                "No alternative response generated."
              }

            </div>


          </div>


        </div>







        {/* Replay Response */}


        <div className="mb-8 rounded-lg border border-border/40 bg-card/50 p-6">


          <h3 className="mb-4 text-lg font-semibold">

            Replay Response

          </h3>



          <div className="rounded-md bg-muted p-4 whitespace-pre-wrap text-sm">


            {
              report.replay_response ||
              "No replay generated."
            }


          </div>


        </div>








        {/* Metrics */}


        <div className="mb-8 rounded-lg border border-border/40 bg-card/50 p-6">


          <h3 className="mb-4 text-lg font-semibold">

            Detailed Quality Metrics

          </h3>


          <QualityReportTable

            data={qualityReportData}

          />


        </div>







        {/* Pipeline */}


        <div className="mb-8 rounded-lg border border-border/40 bg-card/50 p-6">


          <h3 className="mb-4 text-lg font-semibold">

            Multi-Model Pipeline Analysis

          </h3>


          <PipelineBreakdown />


        </div>







        <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">


          <h3 className="mb-2 text-lg font-semibold">

            Ready For More Analysis?

          </h3>



          <p className="mb-6 text-muted-foreground">

            Submit another AI conversation to Cassandra.

          </p>



          <Button>

            Analyze Another Conversation

          </Button>


        </div>



      </div>


    </div>

  )

}