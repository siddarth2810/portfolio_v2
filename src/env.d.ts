/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module "astro-font" {
	export const AstroFont: any;
}
