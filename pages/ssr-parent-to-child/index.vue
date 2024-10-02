<template>
  <div>
    <Parent :state-change-timing="'parent'" />
  </div>
</template>

<script setup lang="ts">
import Parent from '~/components/Parent.vue';
</script>
