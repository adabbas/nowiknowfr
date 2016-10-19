'use strict';

export default class AdminController {
  subscriber = {
    email: ''
  };
  errors = {};
  submitted = false;

  /*@ngInject*/
  constructor(Subscriber) {
    this.Subscribe = Subscribe;
  }



  addSubscriber(form) {
    this.submitted = true;
    this.subscriber.email = form.email;
    if(form.$valid) {
      this.Subscribe.addSubscriber(this.subscriber)
        .then(() => {
          // Redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }

}
