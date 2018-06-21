import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('items', []);
    this.set('placeholders', [
      'eg. Buy some 🥛',
      'eg. Grab a 🍺',
      'eg. Pick up some 🥖']
    );
  },

  itemsWithPlaceholders: computed('items.[]', 'placeholders.[]', function() {
    let items = this.get('items');
    let placeholders = this.get('placeholders');
    let placeholdersLength = placeholders.get('length');

    return items.map((item, index) => {
      let placeholderIndex = index % placeholdersLength;
      return {
        item,
        placeholder: placeholders[placeholderIndex],
      };
    });
  }),

  actions: {
    add() {
      this.get('items').pushObject('');
    },
    clear() {
      this.set('items', []);
    }
  },
});
