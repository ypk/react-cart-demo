const GetItemsTotalPrice = (items) => {
  const cartTotal = items.reduce((total, product) => {
    return total + product.productPrice * product.productQuantity;
  }, 0);
  return FormatPrice(cartTotal);
};

const FormatPrice = (price) => {
  return Number.parseFloat(price).toFixed(2);
};

export { GetItemsTotalPrice, FormatPrice };
