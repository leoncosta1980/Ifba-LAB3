import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts', 
      name: 'Atividade5Library', 
      fileName: (format) => `atividade5-library.${format}.js`
    },
    rollupOptions: {
      
      external: ['react', 'react-dom'],
      output: {
        
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});

