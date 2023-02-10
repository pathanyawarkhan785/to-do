const { ObjectId } = require('mongodb');
const mongo = require('../../db/index');

const getAllData = async () =>
    await mongo.db('sample').collection('documents').find().toArray();

const getRollno = async (rollno) => {
    await mongo.db('sample').collection('documents').findOne({ rollno });
};

const add = async (data) => {
    await mongo.db('sample').collection('documents').insertOne(data);
};

const upd = async (_id) => {
    const updateData = await mongo
        .db('sample')
        .collection('documents')
        .updateOne(
            { _id: ObjectId(_id) },
            { $set: { name: ctx.request.body.name } },
        );
    return updateData;
};

const del = async (_id) => {
    const deleteData = await mongo
        .db('sample')
        .collection('documents')
        .deleteOne({ _id: ObjectId(_id) });
    return deleteData;
};

module.exports = { getAllData, add, upd, del, getRollno };
