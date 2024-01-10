import connectToMongoDB from "./connectToMongoDB.js";

const document1 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
    })
    .toArray();
};

const document2 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $gte: 1, $lte: 5 } }, { size: "small" }],
    })
    .toArray();
};

const document3 = async (collection) => {
  return await collection
    .find({
      $and: [{ quantity: { $gt: 10 } }, { credit_card_type: null }],
    })
    .toArray();
};

const result4_1 = await connectToMongoDB(document1);
const result4_2 = await connectToMongoDB(document2);
const result4_3 = await connectToMongoDB(document3);
console.log(result4_1);
console.log(result4_2);
console.log(result4_3);
