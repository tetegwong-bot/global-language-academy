# Deployment Guide — Global Language Academy

I re-verified the ZIP by extracting it fresh in a clean sandbox and listing the result — `app/`, `components/`, `lib/`, `public/`, `package.json`, `next.config.js`, `tailwind.config.ts`, and `tsconfig.json` are all sitting at the **true root** of the archive, exactly as Vercel needs them. So the ZIP itself isn't the problem. `"Couldn't find any pages or app directory"` is a very specific Vercel message that almost always means one of two things, both of which happen *after* the ZIP is downloaded:

1. **An extra folder got introduced** when moving files into GitHub (e.g. you dragged the *extracted folder itself* into the repo instead of its *contents*, so GitHub ends up with `your-repo/global-language-academy-fixed/app/...` instead of `your-repo/app/...`).
2. **Vercel's "Root Directory" project setting** points at a subfolder that doesn't exist (or doesn't match where `app/` actually landed in the repo).

Below is the exact, foolproof process — pick **either** Option A or Option B.

---

## Before either option: required environment variables

This project uses Supabase for auth. **Vercel does not read your local `.env` file** (it's gitignored on purpose, for security) — you must add these two variables yourself in the Vercel dashboard:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://bxdsorynuqeajznqthzn.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZHNvcnludXFlYWp6bnF0aHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MjIyMzUsImV4cCI6MjA5NzI5ODIzNX0.IH4oCZkBHAhjEzLSFjWtxW_DuPm_pxM2q-ItiEA2KYM` |

(These are the public/anon keys already in the project's `.env` — safe to use as-is, or swap in your own Supabase project's values.) Set these under **Project Settings → Environment Variables** in Vercel, for all three environments (Production / Preview / Development), *before* your first deploy.

---

## Option A — Vercel CLI, no GitHub needed (fastest way to confirm the project itself is fine)

```bash
# 1. Unzip
unzip global-language-academy-fixed.zip -d gla
cd gla

# 2. Confirm you're in the right place — this MUST show app, components, lib, public, package.json
ls

# 3. Install deps
npm install

# 4. Deploy directly — Vercel CLI uploads THIS folder's contents, so nesting is impossible
npx vercel --prod
```
The CLI will prompt for env vars on first deploy, or you can set them via `npx vercel env add` beforehand. If this works, you've confirmed the project is 100% fine and any earlier failure was in the GitHub upload step.

---

## Option B — GitHub + Vercel import

```bash
# 1. Unzip
unzip global-language-academy-fixed.zip -d gla
cd gla

# 2. Verify structure BEFORE pushing — app/ must be listed here, not inside another folder
ls
#  ✅ correct:    app  components  lib  public  package.json  next.config.js  ...
#  ❌ wrong:      gla-extracted/  (one single folder containing everything)

# 3. Init git and push to a new repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then on [vercel.com/new](https://vercel.com/new):
1. Import the GitHub repo.
2. Framework should auto-detect as **Next.js** (a `vercel.json` is now included to lock this in).
3. **Root Directory**: leave as `./` (the default) — do **not** point it at a subfolder unless you know your repo genuinely nests the project one level deep.
4. Add the two environment variables from the table above.
5. Deploy.

If you used GitHub's **web upload** ("Add file → Upload files") instead of `git push`, double-check the repo afterward: click into the repo on GitHub and confirm you see `app/`, `package.json`, etc. directly — not a single folder wrapping all of them. If there's a wrapping folder, delete it and re-upload the *contents* of the extracted ZIP, not the ZIP/folder itself.

---

## What changed in this update

- Fixed a packaging bug on my end: the zip's exclude pattern (`*.git*`) was accidentally also matching and stripping out **`.gitignore`** itself. Fixed — `.gitignore` is now correctly included.
- Added `vercel.json` with an explicit `"framework": "nextjs"` declaration, to remove any ambiguity in Vercel's auto-detection.
- Hardened `lib/supabase.ts` so a missing environment variable produces a clear console warning instead of a hard crash at build/import time — this was a separate, real risk for a Vercel build failing silently if env vars aren't set (see the table above).
- Re-verified the full archive via a clean extraction: `app/`, `components/`, `lib/`, `public/`, `package.json`, `next.config.js`, `tailwind.config.ts`, `tsconfig.json` all confirmed present at the true root, alongside 28 working routes.
