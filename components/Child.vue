<template>
  <div>
    Child: {{ emojiState }}
  </div>
</template>

<script setup lang="ts">
import { useEmoji  } from '~/composables/useEmoji';

const props = defineProps({
  stateChangeTiming: {
    type: String as PropType<'parent' | 'child'>,
    required: true
  }
})

const { emojiState } = useEmoji();

if (props.stateChangeTiming === 'child') {
  emojiState.value = '🤗'
}
</script>
