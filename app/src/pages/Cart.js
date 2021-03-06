import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import CartItemsContainer from "../components/CartItemsContainer";
import CartSummary from "../components/CartSummary";
import { Breadcrumb, Button } from "../components/common";
import { CartContext } from "../contexts";
import { Logger } from "../helpers";
import useToast from "../hooks/useToast";

const Cart = () => {
  const currPage = "Cart";
  const history = useHistory();
  const toast = useToast();

  const {
    items,
    checkOut,
    clearCart,
    cartSummary
  } = useContext(CartContext);

  const { itemsCount, totalPriceVAT } = cartSummary;

  const handleEmptyCartBtnClick = () => {
    const confirmAction = window.confirm(
      "This will clear the cart.\n\nDo you wish to continue?"
    );
    if (confirmAction) {
      const message = "Cart cleared";
      clearCart();
      toast.addToast(message);
      Logger.info(message);
    }
  };

  const handleCheckoutCartBtnClick = () => {
    let purchased = items.reduce(
      (curr, prev) =>
        (curr += `> ${prev.productName} - Qty: ${prev.quantity}\n`),
      ""
    );

    const confirmAction = window.confirm(
      `Checkout Initiated.\n\nProducts purchased:\n\n${purchased}\n\nA total of ${itemsCount} item(s) for a Grand Total of ${Number.parseFloat(totalPriceVAT).toFixed(2)} including VAT.\n\nDo you wish to continue?`
    );
    if (confirmAction) {
      const message = "Checkout Complete";
      checkOut();
      toast.addToast(message);
      Logger.info(message);
    }
  };

  const handleContinueShoppingBtnClick = () => {
    history.push("/products");
  };

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="container py-8 px-6 mx-auto">
          <Breadcrumb currPage={currPage} />
          <main className="my-8">
            <div className="md:flex md:items-center">
              <div className="w-full mr-6">
                <CartItemsContainer />
              </div>
              <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <CartSummary />
              </div>
            </div>
            {items.length > 0 && (
              <>
                <div className="w-full md:items-center md:flex my-12 md:my-8">
                  <div className="w-full flex flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col my-3 md:my-0">
                      <Button
                        className="justify-center"
                        onClick={handleContinueShoppingBtnClick}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                    <div className="flex flex-col md:flex-row my-3 md:my-0">
                      <Button
                        onClick={handleEmptyCartBtnClick}
                        className="justify-center md:justify-end bg-red-500 hover:bg-red-900 focus:bg-red-900 md:mx-3"
                      >
                        Empty Cart
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col items-end flex-grow flex-shrink">
                    <div className="w-full md:w-1/3 flex flex-col my-6 md:my-0">
                      <Button
                        onClick={handleCheckoutCartBtnClick}
                        className="justify-center"
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
