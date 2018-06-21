import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('names', ['Alex', 'Ben', 'Sophie', 'Sarah']);
  },

  actions: {
    updateName(name) {
      this.set('name', name);
    }
  }
});
