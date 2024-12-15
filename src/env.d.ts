/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DIRECTUS_URL: string
  readonly DIRECTUS_STATIC_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
