import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'module-2-assessment'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
