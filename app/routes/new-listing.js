import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    addListing(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      debugger;


      this.transitionTo('index');
    }
  }
});
