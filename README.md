# React Cart Demo

This is a simple test to create a shopping cart app using React. As this is for demo purposes only this is not to be used for production. However as the code is available in this repo, its free to be re-used where ever it may be possible.

![cart demo](https://i.imgur.com/AyZS7fw.png)

## The challenge

To create a shopping cart where one can view products, their descriptions and add to cart, adjust product quantities in the cart and check out

## What's not working

* You may find that the components are very specific for the task at hand. You may need to modify to suit other purposes.

* Product data is being fetched from json files on local drive, that could be replaced by an API call in provider; But my doing so, it will break the cart, to fix it, the structure should be adjusted accordingly in context consumer and components depending on the provider.

* Checkout does nothing at the moment. It just mentions what data is being held.

* Logout/Register any kind of user management isn't present in the cart. Bummer.

* There's no Contact Us page, You should have one if you are plannning to start a e-commerce store.

* Session management. Currently the data for the store is being stored in local storage, and that's not ideal.


## What's actually working

* The app should be up and running out of the box.

* You can view Home Page, Product Listing Page, Product Description Page and Cart 

* You can add items to cart and update items in cart or clear the cart altogether

* It is responsive. This webapp uses TailwindCSS unobtrusive library for styling and responsiveness

* Carousel and Toasts are custom implementations, so they aren't that fancy like the ones you see online

## Is this overkill for demo?

Probably. I made this as part of a test. It IS overkill.