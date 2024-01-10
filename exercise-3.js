import connectToMongoDB from "./connectToMongoDB.js";

const document1 = async (collection) => {
  return await collection.find({}).sort({ total_price: -1 }).toArray();
};

const document2 = async (collection) => {
  return await collection.find({}).sort({ created_at: 1 }).toArray();
};

const resultEx3_1 = await connectToMongoDB(document1);
const resultEx3_2 = await connectToMongoDB(document2);
console.log(resultEx3_1);
console.log(resultEx3_2);
