import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/lab5-SignIn-SignUp',
  plugins: [react()],
})
