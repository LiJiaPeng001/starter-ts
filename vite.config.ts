/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: "./src/index.ts",
			name: "index",
			fileName: "index",
		},
	},
	plugins: [
		dts({
			copyDtsFiles: false,
			// FYI: https://github.com/qmhc/vite-plugin-dts/issues/54#issuecomment-1010949667
			beforeWriteFile: (filePath, content) => ({
				filePath: filePath.replace(/src/, ""),
				content,
			}),
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		alias: [{ find: /^~/, replacement: "" }],
	},
});
