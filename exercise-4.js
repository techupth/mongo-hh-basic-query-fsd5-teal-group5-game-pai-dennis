//ให้ Query ข้อมูล Document ทั้งหมดที่มีการสั่งจำนวน Pizza น้อยกว่า 5 ถาด และจ่ายเงินด้วย Credit Card ของ mastercard
db.pizzaOrders.find({
  $and: [{ credit_card_type: "mastercard" }, { quantity: { $lte: 4 } }],
});

//Query ข้อมูล Document ทั้งหมดที่สั่งซื้อ Pizza ขนาดเล็ก และมีจำนวนถาดอยู่ระหว่าง 1 - 5 ถาด
db.pizzaOrders.find({
  $and: [
    { size: "small" },
    { $and: [{ quantity: { $gte: 1 } }, { quantity: { $lte: 5 } }] },
  ],
});


//Query ข้อมูล Document ทั้งหมดที่มีการสั่ง Pizza จำนวนมากกว่า 10 ถาด และไม่ได้จ่ายเงินด้วย Credit Card
db.pizzaOrders.find({
    $and: [{ credit_card_type: null} , { quantity: { $gte: 10 } }],
  });