## Deployment Guide (Vercel)

This project deploys the frontend (Vite/React) and backend (FastAPI) as two Vercel projects from the `vercel-deploy` branch.

### Prerequisites
- **Vercel CLI**: use `npx vercel` (no global install required)
- **Token**: export `VERCEL_TOKEN` in your shell
- **Node.js + npm** (frontend only)

### Branching
```bash
git checkout -b vercel-deploy   # first time
# or
git checkout vercel-deploy
```

## Backend (FastAPI) → Vercel
- Entry: `backend/api/index.py` exposes `app` from `app.main`
- Config: `backend/vercel.json` uses `@vercel/python`

#### First-time link
```bash
npx -y vercel link --cwd backend --yes --token "$VERCEL_TOKEN" --project sofra-backend
```

#### Deploy to production
```bash
npx -y vercel deploy --cwd backend --prod --yes --token "$VERCEL_TOKEN"
```
- Production URL will look like `https://sofra-backend.vercel.app`
- If you see “Authentication Required”: in Vercel → Project → Settings → Protection, disable Require Authentication (or set Public Paths `/api/*`, `/health`).

## Frontend (Vite/React) → Vercel
- The app reads `VITE_API_BASE_URL` for API calls

#### First-time link
```bash
npx -y vercel link --cwd frontend --yes --token "$VERCEL_TOKEN" --project sofra-frontend
```

#### Set production env var (points to backend)
```bash
npx -y vercel env rm VITE_API_BASE_URL production --yes --cwd frontend --token "$VERCEL_TOKEN" || true
echo 'https://sofra-backend.vercel.app' | npx -y vercel env add VITE_API_BASE_URL production --cwd frontend --token "$VERCEL_TOKEN"
```

#### Deploy to production
```bash
npx -y vercel deploy --cwd frontend --prod --yes --token "$VERCEL_TOKEN"
```
- Production URL will be printed in the CLI output

## Updating code and redeploying
1) Commit and push to `vercel-deploy`:
```bash
git add -A
git commit -m "Update"
git push origin vercel-deploy
```
2) If both backend and frontend changed, deploy in order:
```bash
npx -y vercel deploy --cwd backend --prod --yes --token "$VERCEL_TOKEN"
npx -y vercel deploy --cwd frontend --prod --yes --token "$VERCEL_TOKEN"
```
3) If only one changed, deploy only that part.

## Local development
- Backend:
```bash
cd backend
uvicorn app.main:app --reload --port 8000
```
- Frontend:
```bash
cd frontend
npm install
npm run dev
```
Vite dev server proxies `/api` to `http://localhost:8000`.

## Troubleshooting
- **401 on API**: disable Protection or add Public Paths (`/api/*`, `/health`).
- **CORS errors**: backend currently allows all origins; if restricting, include the frontend domain.
- **Frontend env not applied**: verify with `npx vercel env ls --cwd frontend --token "$VERCEL_TOKEN"`, then redeploy frontend.
- **Backend build errors**: ensure `backend/vercel.json` uses `@vercel/python` and `backend/api/index.py` exposes `app` from `app.main`.
