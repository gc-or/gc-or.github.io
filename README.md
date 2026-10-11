# Can Gong — academic homepage

Local preview for can-gong.com. Based on the supplied redacted CV; not yet published or connected to the domain.

## Preview and export

```sh
npm install
npm run dev
npm run build
```

Uses Vinext, React and static export for GitHub Pages compatibility. Publish `dist/client`, including `_next` and `.nojekyll`, as the site root. The Windows build wrapper lets successful builds close native handles naturally; failure exits are preserved.

Validation: type checking and focused lint cover the authored page and configuration. The scaffold's unused UI components have existing full-repository lint errors. Initial dependency installation reported 11 security advisories (including 8 high); review dependency advisories before public deployment without applying a forced broad upgrade. Only static browser assets will be published, not the build toolchain or a server runtime.

## Editing

- `app/page.tsx`: biography, research, projects, education, honors and email.
- `app/globals.css`: colors, typography and responsive layout.
- `app/layout.tsx`: title, description and search indexing settings.
- `public/portrait.png`: AI-generated fictional anime avatar, replacing the resume photo for privacy.

## Before publishing

- Confirm English wording, current undergraduate status and email for publication.
- Confirm the Hummingbird role: the resume lists both lead and first team member; the page uses “System design & development”.
- Confirm official English competition names. Current wording is descriptive translation.
- Add project photos, verified code/paper links and a public CV when available. No placeholder links or publication claims are included.
- The original PDF is not included in public assets. Redacted fields and financial-aid details are omitted.
- Change `robots` in `app/layout.tsx` to allow indexing for the approved public version.
- Bind can-gong.com and enable HTTPS after content review.

Design references: https://cheng-chi.github.io/, https://zhenjiaxu.com/, https://chuerpan.com/. Original implementation; no reference-site text or images copied.
