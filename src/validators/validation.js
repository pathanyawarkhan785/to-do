const { add, upd, del, getRollno } = require("../../db/query/query");

const postValid = async (ctx, next) => {
  try {
    const findData = await getRollno(ctx.request.body.rollno);
    // console.log(`type : ${typeof findData}`);
    console.log(findData);
    // console.log(await getRollno());

    // console.log(`finddata : ${findData}`);

    const name = ctx.request.body.name;
    const clas = ctx.request.body.class;

    // if (findData !== undefined) {
    //   ctx.throw("rollno exists.");
    // } else if (typeof name !== "string") {
    //   ctx.throw("name must be string.");
    // } else if (typeof clas !== "string") {
    //   ctx.throw(400, "class must be string.");
    // }
    // await next();
  } catch (e) {
    ctx.body = e;
    console.log(e);
  }
};

const patchValid = async (ctx, next) => {
  const updateData = upd(ctx.request.body.rollno);
  try {
    if (updateData) {
      ctx.body = updateData;
    } else {
      ctx.body = "type correct id.";
    }
  } catch (e) {
    ctx.body = e;
    console.log(e);
  }
  await next();
};

const deleteValid = async (ctx, next) => {
  try {
    const deleteData = del(ctx.request.body.rollno);
    if (deleteData) {
      ctx.body = deleteData;
    } else {
      ctx.body = "enter correct id.";
    }
  } catch (e) {
    ctx.body = e;
    console.log(e);
  }
  await next();
};

module.exports = { postValid, patchValid, deleteValid };
