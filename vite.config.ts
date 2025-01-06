import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        { 'vue-router/auto': [ 'useRoute', 'useRouter' ] },
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          alias: {
            'pixel': 'pixelarticons',
          },
          enabledCollections: [ 'pixelarticons' ],
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      // autoInstall: true,
    }),
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [ '.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue' ],
  },
})
