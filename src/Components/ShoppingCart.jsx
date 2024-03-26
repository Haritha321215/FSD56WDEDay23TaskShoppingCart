import { useState } from "react";
import Navibar from "./Navibar";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

function ShoppingCart() {
  // Placeholder image URL from Lorem Picsum
  const placeholderImage = useState(`https://picsum.photos/200/300?random=`);

  // State for the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // State to manage the list of products
  const [products, setProducts] = useState([...Products]);

  // Function to add an item to the cart and update the status of cartstatus in products
  const addItemToCart = (item) => {
    console.log(cartItems);
    const productToAdd = products.find((product) => product.id === item.id);
    setCartItems([...cartItems, productToAdd]);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id ? { ...product, isInCart: true } : product
      )
    );
    console.log(cartItems);
  };

  // Function to remove an item from the cart and update the cartstatus in products
  const removeItemFromCart = (index) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== index));

    console.log(cartItems);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === index ? { ...product, isInCart: false } : product
      )
    );
  };

  // Function to calculate total price of the items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Navibar totalItems={cartItems} />

      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center m-3">
        <h2>Cart Items</h2>
        <ul className="list-unstyled">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{" "}
              <button
                className="btn btn-outline-primary"
                onClick={() => removeItemFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h2>Total Price: ${calculateTotalPrice()}</h2>
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>Available Products</h2>
        <div className="row">
          {products.map((item) => (
            <div
              className="col-sm-4 col-md-3 col-lg-2 d-flex flex-row justify-content-center align-items-center g-3 m-3"
              key={item.id}
            >
              <div className="card w-75 shadow">
                <img
                  src={placeholderImage + item.id}
                  className="card-img-top"
                  alt={item.name}
                  style={{
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    height: "150px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ${item.price}</p>

                  {item.isInCart ? (
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => addItemToCart(item)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
