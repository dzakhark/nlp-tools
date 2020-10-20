<template>
  <div id="app">
    <text-annotator :data="sample2" />
  </div>
</template>

<script>
import { sample2 } from '@/utils/sample2';

import TextAnnotator from './components/TextAnnotator.vue';

export default {
  name: 'App',
  components: {
    TextAnnotator,
  },
  data() {
    return {
      sample2,
    };
  },
};
</script>

<style lang="scss">
</style>
