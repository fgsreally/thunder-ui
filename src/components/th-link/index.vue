<script setup lang="ts">
import { omit } from 'lodash-es'
import type { LinkType } from './types'
const props = withDefaults(defineProps<LinkType>(
), {
  to: '', blank: false,

})
defineOptions({
  name: 'Foo',
  inheritAttrs: false,
})
const renderedTag = $computed(() => {
  if (!props.to) {
    return 'BUTTON' as const
  }
  else if (props.blank) {
    return 'ANCHOR' as const
  }
  else if (/^\/(?!\/).*$/.test(props.to)) {
    // regex101.com/r/LU1iFL/1
    return 'FRAMEWORK' as const
  }
  else {
    return 'ANCHOR' as const
  }
})

const $attrs = useAttrs()

/**
 * tippy checks if the disabled attribute exists on the anchor tag, if it exists it won't show the tooltip.
 * and when directly binding the disabled attribute using v-bind="attrs",
 * vue renders the disabled attribute as disabled="false" ("false" being a string),
 * which causes tippy to think the disabled attribute is present, ( it does a targetElement.hasAttribute("disabled") check ) and it won't show the tooltip.
 *
 * here we are just omiting disabled if it is false.
 */
const updatedAttrs = $computed(() =>
  (renderedTag === 'ANCHOR' && !$attrs.disabled
  )
    ? omit($attrs, 'disabled')
    : $attrs,
)
</script>

<template>
  <button v-if="renderedTag === 'BUTTON'" aria-label="button" role="button" v-bind="$attrs">
    <slot />
  </button>
  <a v-else-if="renderedTag === 'ANCHOR' && !blank" aria-label="Link" :href="to" role="link" v-bind="updatedAttrs">
    <slot />
  </a>
  <a
    v-else-if="renderedTag === 'ANCHOR' && blank" aria-label="Link" :href="to" role="link" target="_blank" rel="noopener"
    v-bind="updatedAttrs"
  >
    <slot />
  </a>
  <RouterLink v-else :to="to" v-bind="updatedAttrs">
    <slot />
  </RouterLink>
</template>
