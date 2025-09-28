import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// 创建 __dirname 的等效值
const __dirname = resolve(new URL('.', import.meta.url).pathname)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    // 路径别名（简化导入）
    alias: {
      '@': resolve(__dirname, './src')
    },
    // 自动补全扩展名
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  // 开发服务器配置
  server: {
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: '<http://localhost:8080>', // 后端地址
        changeOrigin: true, // 修改请求源
        rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写
        // secure: false  // 如果出现代理配置无效可将其打开，尝试关闭HTTPS验证
      },
    },
  },
  build: {
    outDir: 'dist', // 打包输出目录
    sourcemap: true, // 生成 sourcemap 便于调试
  },
})