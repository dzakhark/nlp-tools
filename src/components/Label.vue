<template>
  <span class="label" :style="styles">
    {{ text }}
  </span>
</template>

<script>
import { labels, colors } from '@/utils/maps';

export default {
  name: 'Label',
  props: {
    type: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    text() {
      return labels[this.type] && labels[this.type].toUpperCase();
    },
    styles() {
      return {
        background: `${colors[this.type]}`,
        border: `1px solid ${colors[this.type]}`,
      };
    },
  },
};
</script>

<style scoped>
.label {
  color: white;
  font-size: 10px;
  font-weight: 900;
  height: fit-content;
  padding: 0 0.5em;
  margin: 0 0 0 0.4em;
}
</style>
