'use strict';

describe('Service: Subscribe', function() {
  // load the service's module
  beforeEach(module('Subscribe'));

  // instantiate service
  var Subscribe;
  beforeEach(inject(function(_Subscribe_) {
    Subscribe = _Subscribe_;
  }));

  it('should do something', function() {
    expect(!!Subscribe).toBe(true);
  });
});
