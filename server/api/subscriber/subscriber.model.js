'use strict';
/*eslint no-invalid-this:0*/
import crypto from 'crypto';
mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';


var SubscriberSchema = new Schema({
  email: {
    type: String,
    lowercase: true
  }
});


/**
 * Validations
 */



// Validate email is not taken
SubscriberSchema
  .path('email')
  .validate(function(value, respond) {

    return this.constructor.findOne({ email: value }).exec()
      .then(user => {
        if(user) {
          if(this.id === user.id) {
            return respond(true);
          }
          return respond(false);
        }
        return respond(true);
      })
      .catch(function(err) {
        throw err;
      });
  }, 'The specified email address is already in use.');

var validatePresenceOf = function(value) {
  return value && value.length;
};



export default mongoose.model('User', SubscriberSchema);
