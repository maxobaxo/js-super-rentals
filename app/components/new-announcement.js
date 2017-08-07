import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var cosas = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', cosas);
    }
  }
});
