const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split('-')[1]];
const orderPrice = parseInt(orderData[1], 2) * productPrice;

// |
// v

const orderRecord = parseOrder(orderString);
const orderPrice = price(orderRecord, priceList);

function parseOrder(orderString) {
  const values = orderString.split(/\s+/);

  return {
    productId: values[0].split('-')[1],
    quantity: parseInt(values[1]),
  };
}

function price(order, priceList) {
  return order.quantity * priceList[order.productId];
}
