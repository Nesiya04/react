import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function CartProvider() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Jeans", price: 1200 },
    { id: 3, name: "Shoes", price: 2000 },
  ];

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart ({cart.reduce((a, c) => a + c.qty, 0)})</Link>
      </nav>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              <h2>Products</h2>
              {products.map((p) => (
                <div key={p.id} style={{ marginBottom: "10px" }}>
                  <b>{p.name}</b> - ₹{p.price}
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <div style={{ padding: "20px" }}>
              <h2>Your Cart</h2>
              {cart.length === 0 && <p>Cart is empty</p>}
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <b>{item.name}</b> - ₹{item.price} × {item.qty}
                  <button
                    onClick={() => removeFromCart(item)}
                    style={{ marginLeft: "10px" }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    style={{ marginLeft: "5px" }}
                  >
                    +
                  </button>
                </div>
              ))}
              {cart.length > 0 && (
                <h3>
                  Total: ₹
                  {cart.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
              )}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default CartProvider;
