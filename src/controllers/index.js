const { getAllData, add } = require('../../db/query/query');

const routerGets = async (ctx) => {
    const data = await getAllData();
    ctx.body = data;
    // console.log(data);
};

const routerPost = async (ctx) => {
    const insertData = await add(ctx.request.body);

    ctx.body = { res: 'data inserted successfully.' };
};

const routerPatch = async (ctx) => {};

const routerDelete = async (ctx) => {};
module.exports = {
    routerGets,
    routerPost,
    routerPatch,
    routerDelete,
};
