import Router from 'koa-router';
import jwt from 'koa-jwt';
import { getSecret } from './helpers';
import * as Home from './controllers/Home';

const secret = getSecret();
const jwtMiddleware = jwt({ secret });

const router = new Router({ prefix: '/api' });

router.get('/', Home.index);
router.get('/protected', jwtMiddleware, Home.index);

export default router;
