<script>
import { isFunction } from 'lodash';

import Label from '@/components/Label.vue';

import { TAGS, labels, colors } from '@/utils/maps';

export default {
  name: 'TextAnnotator',
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        labels,
        colors,
        tags: TAGS,
      }),
    },
  },
  render(createElement) {
    const { type } = this.data;

    const children = this.data.childs
      ? this.data.childs.map((el) => createElement('TextAnnotator', { props: { data: el } }))
      : [this.data.value];

    const classes = `${type}`;
    const allowSentimentLabel = (type === 'word1' || type === 'subSentence') && this.data.properties && this.getOptionValue(this.data.properties.sentiment.label, 'labels');
    const style = allowSentimentLabel ? `background:beige; border: 2px solid; border-color:${this.getOptionValue(this.data.properties.sentiment.label, 'colors')}` : '';

    const label = allowSentimentLabel
      ? createElement(Label, { props: { type: this.data.properties.sentiment.label } })
      : null;

    return createElement(this.getOptionValue(type, 'tags'), { class: classes, style }, [...children, label]);
  },
  methods: {
    getOptionValue(item, key) {
      if (!this.options) return null;

      if (this.options[key]) {
        return (isFunction(this.options[key]))
          ? this.options[key](item)
          : this.options[key][item];
        // как-то так сюда будут передаваться tag, label (если undefined || null,
        // то декорацию не делаем), tooltip, classes,
        // style, color, actions ( привязывает к label контекстное меню ),
        // selectable (селектиться будут прямо отдельные структурные единицы),
        // multipleSelect???, ...
        // если передается функция, то она на основе item вычисляет значение опции
      }
      return this.defaultOptions[key][item.type];
    },
  },
};
</script>

<style>
.text {
  line-height: 1.5;
}
</style>
