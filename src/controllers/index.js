const mongo = require("../../db/index");
const { get, add, upd, del } = require("../../db/query/query");
const routerGets = async (ctx) => {
  const data = await get();
  ctx.body = data;
  // console.log(data);
};

const routerPost = async (ctx) => {
  const insertData = await add(ctx.request.body);
  console.log(`insertData : ${insertData}`);
  ctx.body = insertData;
};

const routerPatch = async (ctx) => {};

const routerDelete = async (ctx) => {};
module.exports = {
  routerGets,
  routerPost,
  routerPatch,
  routerDelete,
};
