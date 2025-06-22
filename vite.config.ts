import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
	],
	// base: "/marketing-1/",
	base: "/photo-wall",
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		// 配置文件扩展名，让 Vite 能够识别 .tsx 文件
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	}
})
