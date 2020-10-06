<script>
import Label from '@/components/Label.vue';
import { TAGS, labels, colors } from '@/utils/maps';

export default {
  name: 'SentimentalToken',
  props: {
    info: {
      type: Object,
      required: true,
    },
    labels: {
      type: Object,
      default: () => labels,
    },
    colors: {
      type: Object,
      default: () => colors,
    },
    tags: {
      type: Object,
      default: () => TAGS,
    },
  },
  render(createElement) {
    const { type } = this.info;

    const children = this.info.childs
      ? this.info.childs.map((el) => createElement('SentimentalToken', { props: { info: el } }))
      : [this.info.value];

    const classes = `${type}`;
    const allowSentimentLabel = (type === 'word1' || type === 'subSentence') && this.info.properties && this.labels[this.info.properties.sentiment.label];
    const style = allowSentimentLabel ? `background:beige; border: 2px solid; border-color:${this.colors[this.info.properties.sentiment.label]}` : '';

    const label = allowSentimentLabel
      ? createElement(Label, { props: { type: this.info.properties.sentiment.label } })
      : null;

    return createElement(this.tags[type], { class: classes, style }, [...children, label]);
  },
};
</script>

<style>
</style>
