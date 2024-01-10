import connectToMongoDB from "./connectToMongoDB.js";

const document1 = async (collection) => {
  return await collection.findOne({ customer_name: "Cherlyn" });
};
const document2 = async (collection) => {
  return await collection.find({ credit_card_type: "mastercard" }).toArray();
};
const document3 = async (collection) => {
  return await collection.find({ size: "medium" }).limit(5).toArray();
};
const resultEx1_1 = await connectToMongoDB(document1);
const resultEx1_2 = await connectToMongoDB(document2);
const resultEx1_3 = await connectToMongoDB(document3);
console.log(resultEx1_1);
console.log(resultEx1_2);
console.log(resultEx1_3);
