import React from "react";

const Cart = ({cartContext}) => {
  const { items, removeProduct, updateProduct, clearCart } = cartContext;

  const handleProductRemove = () => {
    const data = 0;
    const quantity = 0;
    removeProduct(data, quantity);
  }

  const handleProductUpdate = () => {
    const data = 0;
    const quantity = 0;
    updateProduct(data, quantity);
  }

  const handleCartClearBtnClick = () => {
    clearCart();
  }

  return (
    <ol>
      {items.map((item) => {
        const { productId, productName, productCurrency, productPrice, productQuantity} = item;
        return (
          <li key={productId}>
            {productName} {productCurrency} {productPrice} {productQuantity}
          </li>
        );
      })}
    </ol>
  );
};

export default Cart;
