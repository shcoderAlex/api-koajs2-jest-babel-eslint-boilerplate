import Koa from 'koa';
import dotenv from 'dotenv';
import routers from './api/routers';

dotenv.config();


const app = new Koa();
const { PORT } = process.env;

app.use(routers.routes());

if (module.parent === null) {
  app.listen(PORT, () => console.log(`server started ${PORT}`));
}

export default app;
