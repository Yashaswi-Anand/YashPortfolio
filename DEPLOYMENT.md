# Deployment

Live site: **https://anandyash.socialriser.com**

Hosted on Hostinger **Web Apps** (Node.js hosting, Business plan). Hostinger watches the
`master` branch of this repo and rebuilds the site itself — there is no FTP step, no zip
upload, and no GitHub Actions workflow involved.

## How a deploy happens

```bash
git push
```

That is the whole process. On every push to `master`, Hostinger:

1. Clones this repo
2. Runs `npm install`
3. Runs `npm run build`
4. Serves the resulting `build/` folder

A deploy takes roughly 1–2 minutes.

## Where to watch it

**hPanel → Websites → anandyash.socialriser.com → Dashboard**

| Page | What it gives you |
| --- | --- |
| **Dashboard** | Last deployment state, commit, duration. Also a **Redeploy** button to rebuild without pushing. |
| **Deployments** | Every deploy, with author / branch / commit / time / status. The live one is tagged **Current**. |
| **Deployments → click a row** | Full build log — searchable, line numbered. This is where build failures are diagnosed. |
| **Runtime logs** | Errors that happen after a successful build, while the site is serving. |

Direct links:

- Dashboard — `hpanel.hostinger.com/websites/anandyash.socialriser.com`
- Deployments — `hpanel.hostinger.com/websites/anandyash.socialriser.com/deployments`

## If a build fails

1. Open **Deployments** and click the row marked **Failed**
2. Read the log from the bottom — the error is near the end
3. Use the **Search logs** box for `error` or `Failed` to jump straight to it
4. Fix, commit, push again — or hit **Redeploy** to retry the same commit

The surest way to avoid a failed deploy is to run the same command locally first:

```bash
npm run build
```

Hostinger runs exactly this, on the same Node version (22.x). If it prints
`Compiled successfully` on your machine, it will almost certainly pass there too.

## Local development

```bash
npm install
npm start
```

Opens http://localhost:3000 with hot reload. `run.bat` does the same thing on Windows
with a double-click, and installs dependencies first if `node_modules` is missing.

## Notes

- `build/` is gitignored. Never commit it — Hostinger generates it.
- `.env.production` disables source maps so the original source is not published, and keeps
  the webpack runtime in a separate file. It is read automatically by `npm run build`.
- Hostinger generates its own `.htaccess` for SPA routing on each deploy.
- After deploying, hard-refresh (**Ctrl + Shift + R**) to bypass the browser cache — otherwise
  you may keep seeing the previous build.
