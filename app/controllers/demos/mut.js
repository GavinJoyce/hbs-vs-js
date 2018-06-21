import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateName(name) {
      this.set('name', name);
    }
  }
});
