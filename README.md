# Website- — Atelier Workspace Starter

A polished full-stack starter for a personal creative workspace: writing notes, art/archive views, and future AI-assisted classification. The project is structured as a Next.js frontend plus a FastAPI backend so it can grow from a visual prototype into a real creative archive.

## What it demonstrates

- A modern frontend prototype built with Next.js, TypeScript, Tailwind, and reusable UI components
- A FastAPI backend with a `/health` check and a starter `/classify` endpoint
- Product thinking around writing/art/model organization, tagging, and future AI features
- A deployable architecture that can later connect to Supabase, storage, and LLM APIs

## Project structure

```text
atelier-workspace-starter/
├── frontend/   # Next.js + Tailwind UI
└── backend/    # FastAPI starter API
```

## Current features

- Landing/workspace page for writing, art, and model experiments
- Search/filter-style interface pieces and card-based content organization
- Starter classification endpoint that returns category, tags, and summary
- Clear extension path for database, auth, file uploads, and AI classification

## Run locally

### Frontend

```bash
cd atelier-workspace-starter/frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

### Backend

```bash
cd atelier-workspace-starter/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Open `http://localhost:8000/docs`.

## Recommended next upgrades

1. Add Supabase auth, Postgres tables, and storage buckets
2. Replace the rule-based classifier with an LLM or a small local model
3. Add real create/edit/archive pages for writing and art
4. Connect the frontend to the FastAPI backend
5. Deploy frontend on Vercel and backend on Render/Railway/Fly.io

## Portfolio note

This repo is best framed as a product/frontend + AI-workflow prototype: the strongest part is the clear full-stack skeleton and the design direction, not production-ready auth or persistence yet.
