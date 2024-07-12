
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MONGODB_URL: string;
	export const MONGODB_DB_NAME: string;
	export const MONGODB_DIRECT_CONNECTION: string;
	export const COOKIE_NAME: string;
	export const HF_TOKEN: string;
	export const HF_API_ROOT: string;
	export const OPENAI_API_KEY: string;
	export const ANTHROPIC_API_KEY: string;
	export const CLOUDFLARE_ACCOUNT_ID: string;
	export const CLOUDFLARE_API_TOKEN: string;
	export const COHERE_API_TOKEN: string;
	export const HF_ACCESS_TOKEN: string;
	export const YDC_API_KEY: string;
	export const SERPER_API_KEY: string;
	export const SERPAPI_KEY: string;
	export const SERPSTACK_API_KEY: string;
	export const USE_LOCAL_WEBSEARCH: string;
	export const SEARXNG_QUERY_URL: string;
	export const AWS_BEDROCK_ACCESS_KEY_ID: string;
	export const AWS_BEDROCK_SECRET_ACCESS_KEY: string;
	export const WEBSEARCH_ALLOWLIST: string;
	export const WEBSEARCH_BLOCKLIST: string;
	export const WEBSEARCH_JAVASCRIPT: string;
	export const OPENID_CONFIG: string;
	export const OPENID_CLIENT_ID: string;
	export const OPENID_CLIENT_SECRET: string;
	export const OPENID_SCOPES: string;
	export const OPENID_NAME_CLAIM: string;
	export const OPENID_PROVIDER_URL: string;
	export const OPENID_TOLERANCE: string;
	export const OPENID_RESOURCE: string;
	export const USE_CLIENT_CERTIFICATE: string;
	export const CERT_PATH: string;
	export const KEY_PATH: string;
	export const CA_PATH: string;
	export const CLIENT_KEY_PASSWORD: string;
	export const REJECT_UNAUTHORIZED: string;
	export const TEXT_EMBEDDING_MODELS: string;
	export const MODELS: string;
	export const OLD_MODELS: string;
	export const TASK_MODEL: string;
	export const PARQUET_EXPORT_DATASET: string;
	export const PARQUET_EXPORT_HF_TOKEN: string;
	export const ADMIN_API_SECRET: string;
	export const PARQUET_EXPORT_SECRET: string;
	export const RATE_LIMIT: string;
	export const MESSAGES_BEFORE_LOGIN: string;
	export const APP_BASE: string;
	export const LLM_SUMMERIZATION: string;
	export const EXPOSE_API: string;
	export const ENABLE_ASSISTANTS: string;
	export const ENABLE_ASSISTANTS_RAG: string;
	export const REQUIRE_FEATURED_ASSISTANTS: string;
	export const ENABLE_LOCAL_FETCH: string;
	export const ALTERNATIVE_REDIRECT_URLS: string;
	export const WEBHOOK_URL_REPORT_ASSISTANT: string;
	export const ALLOWED_USER_EMAILS: string;
	export const USAGE_LIMITS: string;
	export const ALLOW_INSECURE_COOKIES: string;
	export const METRICS_PORT: string;
	export const LOG_LEVEL: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const EFC_14100: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GIT_ASKPASS: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const IGCCSVC_DB: string;
	export const INIT_CWD: string;
	export const JAVA_HOME: string;
	export const LANG: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MAVEN_HOME: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_config_argv: string;
	export const npm_config_bin_links: string;
	export const npm_config_ignore_optional: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_init_license: string;
	export const npm_config_init_version: string;
	export const npm_config_registry: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_user_agent: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_version_git_message: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies_autoprefixer: string;
	export const npm_package_dependencies_aws4: string;
	export const npm_package_dependencies_axios: string;
	export const npm_package_dependencies_browser_image_resizer: string;
	export const npm_package_dependencies_chrono_node: string;
	export const npm_package_dependencies_compromise: string;
	export const npm_package_dependencies_compromise_stats: string;
	export const npm_package_dependencies_compromise_wikipedia: string;
	export const npm_package_dependencies_date_fns: string;
	export const npm_package_dependencies_dotenv: string;
	export const npm_package_dependencies_express: string;
	export const npm_package_dependencies_file_type: string;
	export const npm_package_dependencies_handlebars: string;
	export const npm_package_dependencies_highlight_js: string;
	export const npm_package_dependencies_image_size: string;
	export const npm_package_dependencies_ip_address: string;
	export const npm_package_dependencies_jose: string;
	export const npm_package_dependencies_jsdom: string;
	export const npm_package_dependencies_json5: string;
	export const npm_package_dependencies_katex: string;
	export const npm_package_dependencies_linkedom: string;
	export const npm_package_dependencies_marked: string;
	export const npm_package_dependencies_marked_katex_extension: string;
	export const npm_package_dependencies_mongodb: string;
	export const npm_package_dependencies_nanoid: string;
	export const npm_package_dependencies_openid_client: string;
	export const npm_package_dependencies_parquetjs: string;
	export const npm_package_dependencies_pino: string;
	export const npm_package_dependencies_pino_pretty: string;
	export const npm_package_dependencies_playwright: string;
	export const npm_package_dependencies_postcss: string;
	export const npm_package_dependencies_saslprep: string;
	export const npm_package_dependencies_satori: string;
	export const npm_package_dependencies_satori_html: string;
	export const npm_package_dependencies_sbd: string;
	export const npm_package_dependencies_serpapi: string;
	export const npm_package_dependencies_sharp: string;
	export const npm_package_dependencies_svelte_mapbox_gl: string;
	export const npm_package_dependencies_tailwindcss: string;
	export const npm_package_dependencies_tailwind_scrollbar: string;
	export const npm_package_dependencies_tldts: string;
	export const npm_package_dependencies_unpdf: string;
	export const npm_package_dependencies_uuid: string;
	export const npm_package_dependencies_youtube_transcript: string;
	export const npm_package_dependencies_zod: string;
	export const npm_package_dependencies__aws_sdk_client_bedrock_runtime: string;
	export const npm_package_dependencies__aws_sdk_credential_providers: string;
	export const npm_package_dependencies__cliqz_adblocker_playwright: string;
	export const npm_package_dependencies__gradio_client: string;
	export const npm_package_dependencies__huggingface_hub: string;
	export const npm_package_dependencies__huggingface_inference: string;
	export const npm_package_dependencies__iconify_json_bi: string;
	export const npm_package_dependencies__playwright_browser_chromium: string;
	export const npm_package_dependencies__postlight_parser: string;
	export const npm_package_dependencies__resvg_resvg_js: string;
	export const npm_package_dependencies__xenova_transformers: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_js_yaml: string;
	export const npm_package_devDependencies_minimist: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const npm_package_devDependencies_prom_client: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_ts_node: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_unplugin_icons: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_devDependencies_vite_node: string;
	export const npm_package_devDependencies__faker_js_faker: string;
	export const npm_package_devDependencies__iconify_json_carbon: string;
	export const npm_package_devDependencies__iconify_json_eos_icons: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_devDependencies__types_express: string;
	export const npm_package_devDependencies__types_jsdom: string;
	export const npm_package_devDependencies__types_js_yaml: string;
	export const npm_package_devDependencies__types_minimist: string;
	export const npm_package_devDependencies__types_parquetjs: string;
	export const npm_package_devDependencies__types_sbd: string;
	export const npm_package_devDependencies__types_uuid: string;
	export const npm_package_name: string;
	export const npm_package_optionalDependencies_aws4fetch: string;
	export const npm_package_optionalDependencies_cohere_ai: string;
	export const npm_package_optionalDependencies_openai: string;
	export const npm_package_optionalDependencies__anthropic_ai_sdk: string;
	export const npm_package_optionalDependencies__anthropic_ai_vertex_sdk: string;
	export const npm_package_optionalDependencies__google_cloud_vertexai: string;
	export const npm_package_private: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_scripts_test: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const windir: string;
	export const YARN_WRAP_OUTPUT: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const __PSLockDownPolicy: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_ORIGIN: string;
	export const PUBLIC_SHARE_PREFIX: string;
	export const PUBLIC_GOOGLE_ANALYTICS_ID: string;
	export const PUBLIC_PLAUSIBLE_SCRIPT_URL: string;
	export const PUBLIC_ANNOUNCEMENT_BANNERS: string;
	export const PUBLIC_APPLE_APP_ID: string;
	export const PUBLIC_APP_NAME: string;
	export const PUBLIC_APP_ASSETS: string;
	export const PUBLIC_APP_COLOR: string;
	export const PUBLIC_APP_DESCRIPTION: string;
	export const PUBLIC_APP_DATA_SHARING: string;
	export const PUBLIC_APP_DISCLAIMER: string;
	export const PUBLIC_APP_DISCLAIMER_MESSAGE: string;
	export const PUBLIC_VERSION: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MONGODB_URL: string;
		MONGODB_DB_NAME: string;
		MONGODB_DIRECT_CONNECTION: string;
		COOKIE_NAME: string;
		HF_TOKEN: string;
		HF_API_ROOT: string;
		OPENAI_API_KEY: string;
		ANTHROPIC_API_KEY: string;
		CLOUDFLARE_ACCOUNT_ID: string;
		CLOUDFLARE_API_TOKEN: string;
		COHERE_API_TOKEN: string;
		HF_ACCESS_TOKEN: string;
		YDC_API_KEY: string;
		SERPER_API_KEY: string;
		SERPAPI_KEY: string;
		SERPSTACK_API_KEY: string;
		USE_LOCAL_WEBSEARCH: string;
		SEARXNG_QUERY_URL: string;
		AWS_BEDROCK_ACCESS_KEY_ID: string;
		AWS_BEDROCK_SECRET_ACCESS_KEY: string;
		WEBSEARCH_ALLOWLIST: string;
		WEBSEARCH_BLOCKLIST: string;
		WEBSEARCH_JAVASCRIPT: string;
		OPENID_CONFIG: string;
		OPENID_CLIENT_ID: string;
		OPENID_CLIENT_SECRET: string;
		OPENID_SCOPES: string;
		OPENID_NAME_CLAIM: string;
		OPENID_PROVIDER_URL: string;
		OPENID_TOLERANCE: string;
		OPENID_RESOURCE: string;
		USE_CLIENT_CERTIFICATE: string;
		CERT_PATH: string;
		KEY_PATH: string;
		CA_PATH: string;
		CLIENT_KEY_PASSWORD: string;
		REJECT_UNAUTHORIZED: string;
		TEXT_EMBEDDING_MODELS: string;
		MODELS: string;
		OLD_MODELS: string;
		TASK_MODEL: string;
		PARQUET_EXPORT_DATASET: string;
		PARQUET_EXPORT_HF_TOKEN: string;
		ADMIN_API_SECRET: string;
		PARQUET_EXPORT_SECRET: string;
		RATE_LIMIT: string;
		MESSAGES_BEFORE_LOGIN: string;
		APP_BASE: string;
		LLM_SUMMERIZATION: string;
		EXPOSE_API: string;
		ENABLE_ASSISTANTS: string;
		ENABLE_ASSISTANTS_RAG: string;
		REQUIRE_FEATURED_ASSISTANTS: string;
		ENABLE_LOCAL_FETCH: string;
		ALTERNATIVE_REDIRECT_URLS: string;
		WEBHOOK_URL_REPORT_ASSISTANT: string;
		ALLOWED_USER_EMAILS: string;
		USAGE_LIMITS: string;
		ALLOW_INSECURE_COOKIES: string;
		METRICS_PORT: string;
		LOG_LEVEL: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		EFC_14100: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GIT_ASKPASS: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		IGCCSVC_DB: string;
		INIT_CWD: string;
		JAVA_HOME: string;
		LANG: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MAVEN_HOME: string;
		NODE: string;
		NODE_ENV: string;
		npm_config_argv: string;
		npm_config_bin_links: string;
		npm_config_ignore_optional: string;
		npm_config_ignore_scripts: string;
		npm_config_init_license: string;
		npm_config_init_version: string;
		npm_config_registry: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_user_agent: string;
		npm_config_version_commit_hooks: string;
		npm_config_version_git_message: string;
		npm_config_version_git_sign: string;
		npm_config_version_git_tag: string;
		npm_config_version_tag_prefix: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_dependencies_autoprefixer: string;
		npm_package_dependencies_aws4: string;
		npm_package_dependencies_axios: string;
		npm_package_dependencies_browser_image_resizer: string;
		npm_package_dependencies_chrono_node: string;
		npm_package_dependencies_compromise: string;
		npm_package_dependencies_compromise_stats: string;
		npm_package_dependencies_compromise_wikipedia: string;
		npm_package_dependencies_date_fns: string;
		npm_package_dependencies_dotenv: string;
		npm_package_dependencies_express: string;
		npm_package_dependencies_file_type: string;
		npm_package_dependencies_handlebars: string;
		npm_package_dependencies_highlight_js: string;
		npm_package_dependencies_image_size: string;
		npm_package_dependencies_ip_address: string;
		npm_package_dependencies_jose: string;
		npm_package_dependencies_jsdom: string;
		npm_package_dependencies_json5: string;
		npm_package_dependencies_katex: string;
		npm_package_dependencies_linkedom: string;
		npm_package_dependencies_marked: string;
		npm_package_dependencies_marked_katex_extension: string;
		npm_package_dependencies_mongodb: string;
		npm_package_dependencies_nanoid: string;
		npm_package_dependencies_openid_client: string;
		npm_package_dependencies_parquetjs: string;
		npm_package_dependencies_pino: string;
		npm_package_dependencies_pino_pretty: string;
		npm_package_dependencies_playwright: string;
		npm_package_dependencies_postcss: string;
		npm_package_dependencies_saslprep: string;
		npm_package_dependencies_satori: string;
		npm_package_dependencies_satori_html: string;
		npm_package_dependencies_sbd: string;
		npm_package_dependencies_serpapi: string;
		npm_package_dependencies_sharp: string;
		npm_package_dependencies_svelte_mapbox_gl: string;
		npm_package_dependencies_tailwindcss: string;
		npm_package_dependencies_tailwind_scrollbar: string;
		npm_package_dependencies_tldts: string;
		npm_package_dependencies_unpdf: string;
		npm_package_dependencies_uuid: string;
		npm_package_dependencies_youtube_transcript: string;
		npm_package_dependencies_zod: string;
		npm_package_dependencies__aws_sdk_client_bedrock_runtime: string;
		npm_package_dependencies__aws_sdk_credential_providers: string;
		npm_package_dependencies__cliqz_adblocker_playwright: string;
		npm_package_dependencies__gradio_client: string;
		npm_package_dependencies__huggingface_hub: string;
		npm_package_dependencies__huggingface_inference: string;
		npm_package_dependencies__iconify_json_bi: string;
		npm_package_dependencies__playwright_browser_chromium: string;
		npm_package_dependencies__postlight_parser: string;
		npm_package_dependencies__resvg_resvg_js: string;
		npm_package_dependencies__xenova_transformers: string;
		npm_package_description: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_js_yaml: string;
		npm_package_devDependencies_minimist: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		npm_package_devDependencies_prom_client: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_ts_node: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_unplugin_icons: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies_vitest: string;
		npm_package_devDependencies_vite_node: string;
		npm_package_devDependencies__faker_js_faker: string;
		npm_package_devDependencies__iconify_json_carbon: string;
		npm_package_devDependencies__iconify_json_eos_icons: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_devDependencies__types_express: string;
		npm_package_devDependencies__types_jsdom: string;
		npm_package_devDependencies__types_js_yaml: string;
		npm_package_devDependencies__types_minimist: string;
		npm_package_devDependencies__types_parquetjs: string;
		npm_package_devDependencies__types_sbd: string;
		npm_package_devDependencies__types_uuid: string;
		npm_package_name: string;
		npm_package_optionalDependencies_aws4fetch: string;
		npm_package_optionalDependencies_cohere_ai: string;
		npm_package_optionalDependencies_openai: string;
		npm_package_optionalDependencies__anthropic_ai_sdk: string;
		npm_package_optionalDependencies__anthropic_ai_vertex_sdk: string;
		npm_package_optionalDependencies__google_cloud_vertexai: string;
		npm_package_private: string;
		npm_package_readmeFilename: string;
		npm_package_scripts_build: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_format: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_preview: string;
		npm_package_scripts_test: string;
		npm_package_type: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		windir: string;
		YARN_WRAP_OUTPUT: string;
		ZES_ENABLE_SYSMAN: string;
		__PSLockDownPolicy: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_ORIGIN: string;
		PUBLIC_SHARE_PREFIX: string;
		PUBLIC_GOOGLE_ANALYTICS_ID: string;
		PUBLIC_PLAUSIBLE_SCRIPT_URL: string;
		PUBLIC_ANNOUNCEMENT_BANNERS: string;
		PUBLIC_APPLE_APP_ID: string;
		PUBLIC_APP_NAME: string;
		PUBLIC_APP_ASSETS: string;
		PUBLIC_APP_COLOR: string;
		PUBLIC_APP_DESCRIPTION: string;
		PUBLIC_APP_DATA_SHARING: string;
		PUBLIC_APP_DISCLAIMER: string;
		PUBLIC_APP_DISCLAIMER_MESSAGE: string;
		PUBLIC_VERSION: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
