const koaRouter = require("koa-router");
const router = new koaRouter();

const {
  routerGets,
  routerPost,
  routerPatch,
  routerDelete,
} = require("../controllers/index");

const {
  postValid,
  patchValid,
  deleteValid,
} = require("../validators/validation");

router.get("/get", routerGets);

router.post("/add", postValid, routerPost);

router.patch("/update/:_id", patchValid, routerPatch);

router.delete("/delete/:_id", deleteValid, routerDelete);

module.exports = router;
