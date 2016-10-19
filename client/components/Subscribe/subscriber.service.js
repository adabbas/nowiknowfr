/**
 * Created by Adel on 16/10/2016.
 */
'use strict';

export function UserResource($resource) {
  'ngInject';

  return $resource('/api/subscribers/:id/:controller', {
    id: '@_id'
  }, {
    addSubscriber: {
      method: 'PUT',
      params: {
        controller: 'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }
  });
}
