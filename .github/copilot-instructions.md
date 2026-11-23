# Copilot instructions

## Project layout and architecture

- This is a pnpm workspace (`apps/*`, `packages/*`): `apps/web` is the Next.js 15 App Router frontend, `apps/api` is the Express + GraphQL Yoga API, and `packages/shared` contains shared Zod schemas, types, and constants.
- Keep shared validation and types in `@pentimes/shared`; the web forms and API should use the same schemas rather than duplicate rules.
- The web app proxies `/graphql`, `/upload`, and `/health` to the API through `apps/web/next.config.ts`. Keep browser requests same-origin so cookie and CORS behavior remains consistent.
- Web routes live in `apps/web/src/app` and use the `(public)`, `(auth)`, `(dashboard)`, and `(admin)` route groups. Unit tests are under `apps/web/src/tests/unit`; Playwright end-to-end specs are under `apps/web/src/tests/e2e`.
- The API uses Pothos code-first GraphQL definitions: keep schema types in `graphql/typedefs`, resolver fields in `graphql/resolvers`, and database access in `queries`. Drizzle schemas and SQL migrations live under `src/db`; uploads use the REST route in `src/routes`.
- Use Pothos scope authorization for protected GraphQL fields and operations. The roles are `reader`, `author`, and `admin`; authors and admins can author content.
- Preserve the existing auth contract: refresh tokens are stored as hashes in Redis per device and are deliberately not rotated. Use the existing cache keys and targeted invalidation when changing cached data.
- Uploads must remain server-validated and stored with server-generated identifiers. Production database changes should use Drizzle migrations; never use the development seed against production.

## Commands

Run commands from the repository root. Use Node.js 20.19+ (CI uses 24.22.2) and pnpm 9+; the package manager is pinned to pnpm 9.15.9.

```bash
pnpm install --frozen-lockfile
pnpm dev                              # web and API; local services must be available
pnpm --filter shared build            # build shared before API/web typechecking
pnpm typecheck                        # shared, API, then web
pnpm --filter web test                # Vitest unit tests
pnpm --filter web test -- src/tests/unit/utils.test.ts  # one unit test file
pnpm --filter web test:e2e             # Playwright end-to-end suite
NEXT_PUBLIC_API_URL=https://api.example.com \
NEXT_PUBLIC_SITE_URL=https://example.com \
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=ci \
pnpm build                            # same non-secret placeholders used by CI
pnpm db:generate                      # generate a Drizzle migration
pnpm db:migrate                       # apply migrations
```

CI builds `shared` before typechecking, runs web unit tests, then builds all packages. The build-time `NEXT_PUBLIC_*` values above are placeholders, not secrets. `pnpm lint` exists, but lint is not a CI gate yet: the repository currently has no ESLint configuration, so do not treat it as a passing validation check.

## Project-specific guidance

- Keep TypeScript strict and preserve the existing typed GraphQL inputs, errors, and Relay-style pagination.
- Prefer existing shared Zod schemas for validation. For database structure changes, update the Drizzle schema and add a generated migration.
- When changing article or search behavior, account for PostgreSQL full-text search and invalidate the affected Redis cache entries.
- Keep production secrets out of source control. Use `.env.example` and `.env.production.example` for variable names; never commit real environment files.
- The admin account is created through the API CLI (`pnpm --filter api db:create-admin`); public registration creates reader accounts only. The seed script is for local development only.
