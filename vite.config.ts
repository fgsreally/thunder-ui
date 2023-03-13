import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import transformerDirectives from '@unocss/transformer-directives'
import { presetAttributify, presetUno } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros({
    setupBlock: true,
    plugins: {
      vue: Vue({
        reactivityTransform: true,

      }),
    },
  }),
  AutoImport({
    dirs: ['./src'],
    imports: ['vue', 'vue-router'],
  }),
  Components({
    dirs: ['./src/components'],
    directoryAsNamespace: false,

  }),
  UnoCSS({
    transformers: [
      transformerDirectives(),
    ],
    theme: {
      container: {
        center: true,
      },

      inset: {
        upperPrimaryStickyFold: 'var(--upper-primary-sticky-fold)',
        upperSecondaryStickyFold: 'var(--upper-secondary-sticky-fold)',
        upperTertiaryStickyFold: 'var(--upper-tertiary-sticky-fold)',
        upperMobilePrimaryStickyFold: 'var(--upper-mobile-primary-sticky-fold)',
        upperMobileSecondaryStickyFold:
          'var(--upper-mobile-secondary-sticky-fold)',
        upperMobileStickyFold: 'var(--upper-mobile-sticky-fold)',
        upperMobileTertiaryStickyFold:
          'var(--upper-mobile-tertiary-sticky-fold)',
        lowerPrimaryStickyFold: 'var(--lower-primary-sticky-fold)',
        lowerSecondaryStickyFold: 'var(--lower-secondary-sticky-fold)',
        lowerTertiaryStickyFold: 'var(--lower-tertiary-sticky-fold)',
        sidebarPrimaryStickyFold: 'var(--sidebar-primary-sticky-fold)',
      },
      colors: {
        primary: 'var(--primary-color)',
        primaryLight: 'var(--primary-light-color)',
        primaryDark: 'var(--primary-dark-color)',
        primaryContrast: 'var(--primary-contrast-color)',
        secondary: 'var(--secondary-color)',
        secondaryLight: 'var(--secondary-light-color)',
        secondaryDark: 'var(--secondary-dark-color)',
        accent: 'var(--accent-color)',
        accentLight: 'var(--accent-light-color)',
        accentDark: 'var(--accent-dark-color)',
        accentContrast: 'var(--accent-contrast-color)',
        divider: 'var(--divider-color)',
        dividerLight: 'var(--divider-light-color)',
        dividerDark: 'var(--divider-dark-color)',
        error: 'var(--error-color)',
        tooltip: 'var(--tooltip-color)',
        popover: 'var(--popover-color)',
        gradientFrom: 'var(--gradient-from-color)',
        gradientVia: 'var(--gradient-via-color)',
        gradientTo: 'var(--gradient-to-color)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        icon: 'var(--font-icon)',
      },
      fontSize: {
        tiny: 'var(--font-size-tiny)',
        body: 'var(--font-size-body)',
      },
      lineHeight: {
        body: 'var(--line-height-body)',
      },
      cursor: {
        nsResize: 'ns-resize',
        grab: 'grab',
        grabbing: 'grabbing',
      },

    },
    presets: [
      presetIcons({ /* options */ }),

      presetAttributify(),
      presetUno(),
    ],
  })],
})
