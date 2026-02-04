/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DESTINATION_EMAIL: string
    // more env vars...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
