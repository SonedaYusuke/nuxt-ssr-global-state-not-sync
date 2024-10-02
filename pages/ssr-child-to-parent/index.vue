<template>
  <Parent :state-change-timing="'child'" />
</template>

<script setup lang="ts">
import Parent from '~/components/Parent.vue';
</script>
