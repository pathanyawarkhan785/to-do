const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const router = require('./src/routers/routes');
require('dotenv').config();
const port = 8000 || process.env.port;

app.use(bodyparser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`listening to port no. ${port}.`);
});
