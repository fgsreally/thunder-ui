<script setup lang="ts">
const className = inject('th-spinner-class', 'i-lucide-loader')
</script>

<template>
  <div class="animate-spin svg-icons" :class="className" />
</template>
