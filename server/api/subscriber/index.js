'use strict';

import {Router} from 'express';
import * as controller from './subscriber.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.post('/', controller.create);

module.exports = router;
