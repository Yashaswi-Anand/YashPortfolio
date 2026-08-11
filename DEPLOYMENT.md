# Deploying to anandyash.socialriser.com (Hostinger)

This project is a static React site. `npm run build` produces a `build/` folder
of plain HTML/CSS/JS — there is no server-side code, so it only needs to be
copied into the subdomain's document root.

> **About credentials:** every step that needs a password is done by you, in
> Hostinger's panel or GitHub's settings UI. Never paste FTP or hosting
> passwords into a chat, a commit, or a GitHub issue. If one ever leaks, reset
> it in hPanel rather than trying to scrub it.

---

## Why not Hostinger's built-in Git deploy?

hPanel has a Git integration, but it is a **pull-only file sync — it does not run
`npm install && npm run build`**. It would copy the raw repository (`src/`,
`package.json`, …) into the web root, and there would be no `index.html` at the
top level, so the site would not load. Hostinger's build-capable option
(Node.js / Web Apps hosting) is limited to Business and Cloud plans.

So the build has to happen somewhere else. GitHub Actions does it for free.

---

## One-time setup

### Step 1 — Create the subdomain and enable SSL

In hPanel: **Domains → Subdomains**, create `anandyash` under `socialriser.com`.

Then note the **document root path** it shows you. This is the single most
important value in this whole process, and it is not the same on every account:

| How the subdomain was created | Typical document root |
| --- | --- |
| As its own website | `/domains/anandyash.socialriser.com/public_html/` |
| As a folder of an existing site | `/domains/socialriser.com/public_html/anandyash/` |

**Read the real path off hPanel — do not assume.** Deploying to `public_html/`
by mistake would overwrite your main site.

SSL is issued automatically and free. If it has not appeared after a few
minutes, check **Security → SSL**.

### Step 2 — Create a scoped FTP account

In hPanel: **Files → FTP Accounts**.

Create a *new* FTP account restricted to the subdomain's directory rather than
reusing the master account. If that credential ever leaks, the damage is limited
to this one subdomain and you can revoke it without breaking your own FileZilla
setup.

That page shows you the hostname (often an IP), the username (looks like
`u123456789.something`), and the directory. The password is masked permanently —
if you do not have it recorded, use **Change FTP Password** to set a new one.

### Step 3 — Add four secrets to GitHub

Go to the repo → **Settings → Secrets and variables → Actions → New repository
secret**. Use the **Secrets** tab, not Variables — Variables are visible in
build logs, Secrets are masked.

| Secret name | Value |
| --- | --- |
| `FTP_SERVER` | Hostname or IP. No `ftp://`, no port, no trailing slash. |
| `FTP_USERNAME` | Full username including the `u123456789.` prefix. |
| `FTP_PASSWORD` | That FTP account's password. |
| `FTP_SERVER_DIR` | Document root from Step 1, **with a trailing slash**. |

### Step 4 — Do a dry run first

In [.github/workflows/deploy.yml](.github/workflows/deploy.yml), set:

```yaml
dry-run: true
```

Commit and push. The Actions log will list exactly which remote paths it *would*
write, without uploading anything. Confirm they sit inside your subdomain
directory, then set it back to `false` and push again for the real deploy.

---

## Everyday use

After setup, deploying is just:

```bash
git push
```

Every push to `master` rebuilds and uploads. Watch progress in the repo's
**Actions** tab. You can also trigger a deploy by hand from there via
**Run workflow**.

---

## First deploy without waiting for CI

If you want the site live in the next five minutes:

```bash
npm run build
```

Then in hPanel → **Files → File Manager**, open the subdomain's document root
and upload **the contents of `build/`** (not the `build` folder itself). The
fastest route is to zip the contents, upload the zip, and use File Manager's
Extract.

Two things people miss:

- `.htaccess` is a hidden file. Turn on **Show hidden files** in File Manager,
  or it silently will not be uploaded — and it carries the HTTPS redirect and
  the caching rules.
- Upload the *contents*, so that `index.html` sits directly in the document
  root, not at `.../public_html/build/index.html`.

---

## Post-deploy checklist

- [ ] `https://anandyash.socialriser.com` loads over HTTPS with a valid padlock
- [ ] `http://` redirects to `https://`
- [ ] The browser tab shows the teal **YA** icon, not the React logo
- [ ] Every section renders: Home, Experience, Skills, Education, Projects, Achievements, Contact
- [ ] The contact form opens a mail draft addressed to `anandyash1711@gmail.com`
- [ ] It looks right on a phone
- [ ] Paste the URL into LinkedIn or WhatsApp and confirm the preview shows your photo and name

---

## Troubleshooting

**The Actions run fails at the build step.**
Almost always ESLint. `react-scripts` treats warnings as fatal errors when
`CI=true`, which GitHub sets automatically — the workflow already overrides this
with `CI: 'false'`. If you removed that line, put it back.

**The deploy reports success but the live site does not change.**
The FTP action keeps a `.ftp-deploy-sync-state.json` file on the server and only
uploads what changed. If you edited files directly via File Manager or FileZilla,
that record no longer matches reality. Delete
`.ftp-deploy-sync-state.json` from the document root and re-run the workflow.

**Files landed in the wrong folder.**
`FTP_SERVER_DIR` is wrong or missing its trailing slash. Fix the secret and
re-run — and use `dry-run: true` to check before uploading again.

**Blank page, and the console says `Unexpected token '<'`.**
A stale browser tab is requesting a JS bundle from an older build. The
`.htaccess` in this repo already prevents this by returning a real 404 for
missing assets instead of serving `index.html`. Confirm `.htaccess` actually
reached the document root.

**TLS handshake error during upload.**
Test once with `protocol: ftp` to confirm the credentials are right, then switch
back to `ftps`. Note the action cannot do SFTP at all — if your host is
SFTP-only, use `SamKirkland/web-deploy` instead.
