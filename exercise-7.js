import connectToMongoDB from "./connectToMongoDB.js";

const document = async (collection) => {
  await collection.deleteMany({ customer_name: "Jack" });
  return await collection.find({ customer_name: "Jack" }).toArray();
};

const result = await connectToMongoDB(document);
console.log(result);
