<template>
  <div>
    Parent: {{ emojiState }}
    <Child :state-change-timing="props.stateChangeTiming" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import Child from '~/components/Child.vue'
import { useEmoji  } from '~/composables/useEmoji';

const props = defineProps({
  stateChangeTiming: {
    type: String as PropType<'parent' | 'child'>,
    required: true
  }
})

const { emojiState } = useEmoji();

if (props.stateChangeTiming === 'parent') {
  emojiState.value = '🤗'
}
</script>
