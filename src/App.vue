<template>
  <v-app>
    <text-annotator :data="sample2" />
    <div class="text-center">
      <v-badge
        @click.native="onBadgeClick"
      >
        <span >
          Item One
        </span>
      </v-badge>

      <v-menu
        v-model="showMenu"
        :position-x="position.x"
        :position-y="position.y"
        offset-y
        absolute
      >
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app>
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
      showMenu: false,
      position: {
        x: 0,
        y: 0,
      },
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  methods: {
    onBadgeClick(e) {
      console.log('click');
      this.showMenu = false;
      this.position.x = e.clientX;
      this.position.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    },
  },
};
</script>
