//Insert ข้อมูล Document เดียว

db.pizzaOrders.insertOne({
  title: "My New Movie",
  description:
    "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  genres: "Drama",
  year: 2021.0,
  rating: 10.0,
  poster: "http://dummyimage.com/250x300.png/cc0000/ffffff",
});

//Insert ข้อมูลหลาย ๆ Document

db.pizzaOrders.insertMany([
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
