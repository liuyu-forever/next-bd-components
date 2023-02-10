import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resolve = (str) => {
  return path.resolve(__dirname, str)
}

const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    'src/**/*.test.tsx',
    'src/**/*.stories.tsx',
    'src/**/*.stories.mdx',
    'src/setupTests.ts',
  ],
}

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: 'dist', //打包输出的目录
    lib: {
      entry: resolve('./src/index.tsx'),
      name: 'BdBusinessComponents',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        name: 'BdBusinessComponents',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          /*  axios: "Axios", */
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/styles/var.less',
          )}"`,
        },
        javascriptEnabled: true,
      },
    },
    modules: {
      // 样式小驼峰转化,
      //css: goods-list => tsx: goodsList
      localsConvention: 'dashesOnly',
    },
  },
  plugins: [
    react(),
    typescript({
      target: 'es5',
      rootDir: resolve('src/'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
      declaration: true,
      declarationDir: resolve('dist'),
    }),
  ],
})
