<script lang="ts" setup>
const { radius, stroke, progress } = withDefaults(defineProps<{
  radius?: number
  progress?: number
  stroke?: number
}>(), {
  radius: 12,
  progress: 50,
  stroke: 4,
})
const normalizedRadius = radius - stroke * 2
const circumference = normalizedRadius * 2 * Math.PI
const strokeDashoffset = $computed(() => {
  return circumference - (progress / 100) * circumference
})
</script>

<template>
  <svg :height="radius * 2" :width="radius * 2">
    <circle
      :stroke-width="stroke"
      class="stroke-green-500"
      fill="transparent"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
    <circle
      :stroke-width="stroke"
      stroke="currentColor"
      fill="transparent"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      :style="{ strokeDashoffset }"
      :stroke-dasharray="`${circumference} ${circumference}`"
    />
  </svg>
</template>
