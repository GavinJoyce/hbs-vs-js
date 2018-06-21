import Component from '@ember/component';
import EmberObject from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { A } from '@ember/array';

let Item = EmberObject.extend({
  title: 'Untitled',
  isComplete: false,
  showSidebar: false
});

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('items', [
      Item.create({ title: 'Buy milk' }),
      Item.create({ title: 'Run 10k' }),
      Item.create({ title: 'Have a pint', isComplete: true }),
    ]);
  },

  outstandingItems: filterBy('items', 'isComplete', false),
  completedItems: filterBy('items', 'isComplete', true),

  actions: {
    log(message) {
      window.alert(message);
    },
    toggleSidebar() {
      this.toggleProperty('showSidebar');
    },
    add() {
      this.get('items').pushObject(
        Item.create({ title: 'Have another pint' }),
      );
    },
    clear() {
      let completed = this.get('completedItems');
      let items = this.get('items');

      items.removeObjects(completed);
    },
    clearAll() {
      this.set('items', A());
    }
  }
});
