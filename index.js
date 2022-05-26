const koa = require("koa");
const app = new koa();
const bodyparser = require("koa-bodyparser");
const router = require("./src/routers/routes");

app.use(bodyparser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
  console.log("listening to port no. 8000");
});
