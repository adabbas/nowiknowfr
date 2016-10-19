'use strict';
const angular = require('angular');

/*@ngInject*/
export function SubscribeService(Subscriber) {
  /**
   * Opens a modal
   * @param  {Object} scope      - an object to be merged with modal's scope
   * @param  {String} modalClass - (optional) class(es) to be applied to the modal
   * @return {Object}            - the instance $uibModal.open() returns
   */
  function addSubscriber(subscriber) {
      return Subscriber.save(subscriber, function(data) {
        return safeCb(callback)(null, user);
      }, function(err) {
        return safeCb(callback)(err);
      })
        .$promise;

  }
}

export default angular.module('Subscribe', [])
  .service('Subscribe', SubscribeService)
  .name;
