# AGENTS.md

## Scope

These instructions apply to the entire documentation site repository.

## Validation

After every change, run the following before handing work back:

```bash
pnpm lint
pnpm types:check
pre-commit run --all-files
```

## Docs conventions

- Keep pages focused; split oversized documents into smaller pages when a page covers multiple unrelated tasks.
- Prefer clear hierarchy with `meta.json` so navigation order is intentional.
- For bilingual content, keep English and Chinese structures aligned whenever practical.
