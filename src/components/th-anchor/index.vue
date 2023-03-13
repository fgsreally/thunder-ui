<script lang="ts" setup>
import type { AnchorType } from './types'
withDefaults(defineProps<AnchorType>()
  , {
    to: '',
    exact: true,
    blank: false,
    label: '',
    icon: null as any,
    svg: null as any,
    color: '',
    disabled: false,
    reverse: false,
  })
</script>

<template>
  <th-link
    :to="to"
    :exact="exact"
    :blank="blank"
    inline-flex items-center justify-center focus:outline-none
    :class="[
      color
        ? `text-${color}-500 hover:text-${color}-600 focus-visible:text-${color}-600`
        : 'hover:text-secondaryDark focus-visible:text-secondaryDark',
      { 'opacity-75 cursor-not-allowed': disabled },
      { 'flex-row-reverse': reverse },
    ]"
    :disabled="disabled"
    tabindex="0"
  >
    <component
      :is="icon"
      v-if="icon"
      class="svg-icons"
      :class="label ? (reverse ? 'ml-2' : 'mr-2') : ''"
    />
    {{ label }}
  </th-link>
</template>
