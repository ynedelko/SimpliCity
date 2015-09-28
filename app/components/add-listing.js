import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addListing() {
      var params = {
        title: this.get('title'),
        owner: this.get('owner'),
        body: this.get('body'),
        category: $("#category").val(),
        timestamp: Date.now()
      }
      this.sendAction('addListing', params);
    }
  }

});
