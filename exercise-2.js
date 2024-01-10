import connectToMongoDB from "./connectToMongoDB.js";

const document = async (collection) => {
  return await collection.findOne(
    { customer_name: /zo/i },
    { projection: { total_price: true, customer_name: true } }
  );
};
const result = await connectToMongoDB(document);
console.log(result);
