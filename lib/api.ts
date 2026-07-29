const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export interface ConversationMessage {
  role: string;
  content: string;
}

export interface AnalyzeRequest {
  system_prompt: string;
  conversation: ConversationMessage[];
}

export interface AnalyzeResponse {
  verdict: string;
  severity: string;
  confidence: number;

  issue: string;
  root_cause: string;
  explanation: string;
  recommendation: string;

  improved_prompt: string;
  better_response: string;

  replay_response: string;

  quality_report: any;
}

export async function analyzeAssistant(
  payload: AnalyzeRequest
): Promise<AnalyzeResponse> {
  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `Backend Error (${response.status}): ${error}`
    );
  }

  return response.json();
}