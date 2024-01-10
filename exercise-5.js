import connectToMongoDB from "./connectToMongoDB.js";

const document1 = async (collection) => {
  return await collection.insertOne({
    size: "small",
    total_price: 3000,
    quantity: 8,
    customer_name: "John",
    credit_card_type: null,
    created_at: "2021-02-07T10:48:40Z",
  });
};

const document2 = async (collection) => {
  return await collection.insertMany([
    {
      size: "small",
      total_price: 3000,
      quantity: 1,
      customer_name: "James",
      credit_card_type: null,
      created_at: "2021-02-07T10:48:40Z",
    },
    {
      size: "large",
      total_price: 12000,
      quantity: 13,
      customer_name: "K",
      credit_card_type: null,
      created_at: "2022-03-05T10:48:40Z",
    },
    {
      size: "small",
      total_price: 2000,
      quantity: 2,
      customer_name: "Jack",
      credit_card_type: null,
      created_at: "2022-02-14T10:48:40Z",
    },
  ]);
};

const result5_1 = await connectToMongoDB(document1);
const result5_2 = await connectToMongoDB(document2);
console.log(result5_1);
console.log(result5_2);
