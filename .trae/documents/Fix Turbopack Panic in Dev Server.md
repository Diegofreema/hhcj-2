## What Happened
- Next.js 16 dev server started with Turbopack and crashed with a Rust panic: `Validation on the CLOEXEC pipe failed`.
- The log shows “Console Ninja extension is connected to Next.js”. Console Ninja doesn’t reliably support Turbopack and can interfere with its worker processes, causing unexpected panics (see Console Ninja maintainers noting limited Turbopack integration).
- Your project uses Next.js 16 (`package.json:6` has `"dev": "next dev"`), which defaults to Turbopack.

## Immediate Workarounds
- Run the dev server without Turbopack: `next dev --no-turbo`.
- Alternatively, temporarily disable Console Ninja in the editor and restart the dev server.
- Prefer running with Node’s package manager (`npm/pnpm/yarn run dev`) instead of `bun dev` to avoid Bun-related process/FD differences during development.

## Proposed Fix (Changes I will make on approval)
- Update `package.json` so `dev` runs without Turbopack: `"dev": "next dev --no-turbo"`.
- Optionally add a separate script so you can still try Turbopack when needed: `"dev:turbo": "next dev"`.
- If Console Ninja is enabled, document or add a note in the repo README to disable it when using Turbopack.
- Ensure you’re using a stable Node LTS (Node 20). If your environment is on Node 22, downgrade for dev to reduce known Turbopack instability.

## Verification
- Start the dev server and load `/` to confirm HTTP 200 and no Rust panic.
- If desired, re-enable Turbopack via `npm run dev:turbo` and test again with Console Ninja disabled.

## Optional Diagnostics
- Print a backtrace by setting `RUST_BACKTRACE=1 next dev` to capture more details during crash for a bug report.
- Inspect the panic log pointed to in the terminal and attach it if reporting upstream.

## Notes
- No code paths in your app need changes; this is a tooling/runtime issue.
- If you prefer Turbopack, we can iterate by disabling Console Ninja and ensuring Node 20, then re-test.