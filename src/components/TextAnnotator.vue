<script>
import Label from '@/components/Label.vue';

import { options } from '@/mixins/options';

export default {
  name: 'TextAnnotator',
  mixins: [options],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  render(createElement) {
    const { type } = this.data;

    const children = this.data.childs
      ? this.data.childs.map((el) => createElement('TextAnnotator', { props: { data: el } }))
      : [this.data.value];

    const allowSentimentLabel = type === 'subSentence' && this.data.properties && this.getOptionValue(this.data.properties.sentiment.label, 'labels');
    const classes = `${type} ${allowSentimentLabel ? 'has-label' : ''}`;
    const style = allowSentimentLabel ? `background:beige; border: 2px solid; border-color:${this.getOptionValue(this.data.properties.sentiment.label, 'colors')}` : '';

    const label = allowSentimentLabel
      ? createElement(Label, { props: { type: this.data.properties.sentiment.label } })
      : null;

    return createElement(this.getOptionValue(type, 'tags'), { class: classes, style }, [...children, label]);
  },
};
</script>

<style lang="scss">
.text {
  line-height: 1.5;
  * {
    box-sizing: border-box;
  }

  .has-label {
    margin: 0 2px;
  }
}
</style>
