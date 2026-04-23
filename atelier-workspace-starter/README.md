# Atelier Workspace Starter

A personal creative workspace for writing, art uploads, and experimental model projects.

## What is included

- `frontend/`: Next.js + Tailwind starter UI
- `backend/`: FastAPI starter API for future auto-classification and AI features
- A visual workspace homepage matching the design direction we discussed

## What it already does

- Shows a polished landing/workspace page
- Includes sections for writing, art, and models
- Gives you a clean structure that is easy to extend

## What it does not do yet

This starter is a foundation, not a finished production app. It does **not** yet include:

- real login
- real database persistence
- real file uploads
- real AI classification
- real publishing flow

Those can be added next with Supabase + storage + OpenAI API.

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Then open:

```bash
http://localhost:8000/docs
```

## How to deploy the website

### Easiest option: Vercel for frontend

1. Create a GitHub repo
2. Upload the `frontend` folder contents or the whole project
3. Import the repo into Vercel
4. Set the root directory to `frontend`
5. Deploy

That will give you a public link you can use anytime.

### Backend deployment

You can deploy the FastAPI backend later on:

- Render
- Railway
- Fly.io

## Best next upgrades

1. Add Supabase auth + database
2. Add image/file upload storage
3. Save writing entries and artwork metadata
4. Connect frontend to FastAPI classify endpoint
5. Replace starter classification with OpenAI or your own Python model
6. Add an editor page and archive page

## How to modify features later

### Change the look

Edit:

- `frontend/app/page.tsx`
- `frontend/app/globals.css`
- `frontend/tailwind.config.ts`

### Change the writing/art/model sections

Edit the arrays near the top of:

- `frontend/app/page.tsx`

### Add backend AI or classification logic

Edit:

- `backend/app/main.py`

### Add database later

Recommended:

- Supabase for auth + Postgres + storage

Suggested tables:

- `entries`
- `artworks`
- `models`
- `tags`
- `collections`

## Recommended long-term architecture

- Frontend: Next.js
- Backend: FastAPI
- Database/Auth/Storage: Supabase
- AI: OpenAI API
- Deployment: Vercel + Render/Railway

