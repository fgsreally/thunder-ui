<script lang="ts" setup>
import type { ItemType } from './types'

withDefaults (defineProps<ItemType>(), {})
</script>

<template>
  <th-link
    :to="to"
    :exact="exact"
    :blank="blank"
    class="inline-flex items-center flex-shrink-0 px-4 py-2 rounded transition hover:bg-primaryDark hover:text-secondaryDark focus:outline-none focus-visible:bg-primaryDark focus-visible:text-secondaryDark"
    :class="[
      { 'opacity-75 cursor-not-allowed': disabled },
      { 'pointer-events-none': loading },
      { 'flex-1': label },
      { 'flex-row-reverse justify-end': reverse },
      {
        'border border-divider hover:border-dividerDark focus-visible:border-dividerDark':
          outline,
      },
    ]"
    :disabled="disabled"
    :tabindex="loading ? '-1' : '0'"
    role="menuitem"
  >
    <span
      v-if="!loading"
      class="inline-flex items-center"
      :class="{ 'self-start': !!infoIcon }"
    >
      <component
        :is="icon"
        v-if="icon"
        class="opacity-75 svg-icons"
        :class="[
          label ? (reverse ? 'ml-4' : 'mr-4') : '',
          { 'text-accent': active },
        ]"
      />
    </span>
    <SmartSpinner v-else class="mr-4 text-secondaryDark" />
    <div
      class="inline-flex items-start flex-1 truncate"
      :class="{ 'flex-col': description }"
    >
      <div class="font-semibold truncate">
        {{ label }}
      </div>
      <p v-if="description" class="my-2 text-left text-secondaryLight">
        {{ description }}
      </p>
    </div>
    <component
      :is="infoIcon"
      v-if="infoIcon"
      class="items-center self-center ml-4 svg-icons"
      :class="{ 'text-accent': activeInfoIcon }"
    />
    <div v-if="shortcut.length" class="ml-4 <sm:hidden font-medium">
      <kbd
        v-for="(key, index) in shortcut"
        :key="`key-${index}`"
        class="-mr-2 shortcut-key"
      >
        {{ key }}
      </kbd>
    </div>
  </th-link>
</template>
