# Cassandra

Cassandra is an AI Quality Engineer that audits AI assistants. It detects hallucinations, prompt weaknesses, unsafe responses, and other quality issues, then recommends improvements and generates a safer replay response.

---
## Repository Structure

Cassandra is split into two repositories for easier development and deployment.

- **Frontend** – Next.js application (UI)
- **Backend** – FastAPI application (AI analysis API)

Clone both repositories before following the setup instructions.
---
## How to Run

### 1. Clone both repositories

```bash
git clone <https://github.com/Stillchamp/cassandra.git> frontend
git clone <https://github.com/Stillchamp/Cassandra-backend.git> backend
```

### 2. Configure Environment Variables

Each repository contains a `.env.example` file.

Create a `.env` file by copying the example file.

#### Backend

```env
HF_TOKEN=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
MODEL_ID=google/gemma-4-26B-A4B-it
```
OR
Generate a free Hugging Face API token from:

https://huggingface.co/settings/tokens

#### Frontend

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```
---
### 3. Run the Backend

```bash
cd Cassandra

python -m venv venv

# macOS / Linux
source venv/bin/activate

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```
---
### 4. Run the Frontend

```bash
cd cassandra-frontend

pnpm install

pnpm dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## What Cassandra Does

- Audits AI assistant conversations
- Detects hallucinations and unsafe responses
- Identifies the most critical quality issue
- Explains the root cause
- Suggests prompt improvements
- Generates a safer replay response
- Produces an overall quality score

---
## How We Built It

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- pnpm

### Backend

- FastAPI
- Python
- Hugging Face Inference API
- Gemma 4 (Quality Analysis)
- Gemma 3 (Replay Generation)

---
## Challenges

The biggest challenge was obtaining reliable structured JSON from the language model. Models occasionally returned reasoning or partially formatted responses instead of valid JSON. We solved this by refining the prompts and implementing a parser that extracts, sanitises, and validates the model output before generating the final quality report.


## Demo

This submission includes either:

- A live demo link, or
- A demonstration video showing Cassandra in action.
