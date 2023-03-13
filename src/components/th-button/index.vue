<script setup lang="ts">
import type { ButtonType } from './types'

withDefaults(defineProps<ButtonType>(), {
  to: '',
  exact: true,
  blank: false,
  label: '',
  icon: null,
  svg: null,
  color: '',
  disabled: false,
  loading: false,
  large: false,
  shadow: false,
  reverse: false,
  rounded: false,
  gradient: false,
  outline: false,
  shortcut: () => [],
})
</script>

<template>
  <th-link
    :to="to"
    :blank="blank"
    relative inline-flex items-center justify-center py-2 font-bold transition focus:outline-none focus-visible:bg-accentDark
    :class="[
      color
        ? `text-${color}-800 bg-${color}-200 hover:(text-${color}-900 bg-${color}-300) focus-visible:(text-${color}-900 bg-${color}-300)`
        : `text-accentContrast bg-accent hover:bg-accentDark focus-visible:bg-accentDark`,
      label ? 'px-4' : 'px-2',
      rounded ? 'rounded-full' : 'rounded',
      { 'opacity-75 cursor-not-allowed': disabled },
      { 'pointer-events-none': loading },
      { 'px-6 py-4 text-lg': large },
      { 'shadow-lg hover:shadow-xl': shadow },
      {
        'text-white bg-gradient-to-tr from-gradientFrom via-gradientVia to-gradientTo':
          gradient,
      },
      {
        'border border-accent hover:border-accentDark focus-visible:border-accentDark':
          outline,
      },
    ]"
    :disabled="disabled"
    :tabindex="loading ? '-1' : '0'"
    role="button"
  >
    <span
      class="inline-flex items-center justify-center whitespace-nowrap"
      :class="[{ 'flex-row-reverse': reverse }, { 'opacity-50': loading }]"
    >
      <component
        :is="!!icon"
        v-if="icon"
        class="svg-icons"
        :class="[
          { '!text-2xl': large },
          label ? (reverse ? 'ml-2' : 'mr-2') : '',
        ]"
      />
      {{ label }}
      <div v-if="shortcut.length" class="<sm:hidden">
        <kbd
          v-for="(key, index) in shortcut"
          :key="`key-${index}`"
          class="shortcut-key !bg-accentDark !border-accentLight"
        >
          {{ key }}
        </kbd>
      </div>
    </span>
    <span
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <th-spinner />
    </span>
  </th-link>
</template>
