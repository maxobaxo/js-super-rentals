import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    saveAnnouncement3(cosas) {
    var newAnnouncement = this.store.createRecord('announcement', cosas);
    newAnnouncement.save();
    this.transitionTo('announcements');
  },
  
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
