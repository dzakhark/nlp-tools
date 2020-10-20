import { isFunction } from 'lodash';
import defaultOptions from '@/utils/maps';

// eslint-disable-next-line import/prefer-default-export
export const options = {
  props: {
    options: {
      type: Object,
      default: () => defaultOptions,
    },
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
      return defaultOptions[key][item.type];
    },
  },
};
