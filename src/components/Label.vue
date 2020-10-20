<template>
  <span class="label" :style="styles">
    {{ text }}
  </span>
</template>

<script>
import { options } from '@/mixins/options';

export default {
  name: 'Label',
  mixins: [options],
  props: {
    type: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    text() {
      return this.getOptionValue(this.type, 'labels') && this.getOptionValue(this.type, 'labels').toUpperCase();
    },
    styles() {
      return {
        background: `${this.getOptionValue(this.type, 'colors')}`,
        border: `1px solid ${this.getOptionValue(this.type, 'colors')}`,
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
