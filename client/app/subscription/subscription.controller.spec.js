'use strict';

describe('Controller: SubscriptionCtrl', function() {
  // load the controller's module
  beforeEach(module('Subscription'));

  var SubscriptionCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    SubscriptionCtrl = $controller('SubscriptionCtrl', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
