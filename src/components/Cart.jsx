import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const { user, cart, setCart } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    setOrderValue(total);
  }, [cart]);

  const increment = (id) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
  };

  const decrement = (id) => {
    const updated = cart.map((item) =>
      item._id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setCart(updated);
  };

  const placeOrder = async () => {
    try {
      const url = `${API_URL}/api/orders`;
      const newOrder = {
        userId: user._id,
        email: user.email,
        orderValue,
        items: cart,
      };
      await axios.post(url, newOrder);
      setCart([]);
      navigate("/order");
    } catch (err) {
      setError("Failed to place order. Try again.");
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">🛍 Your Cart</div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
            alt="Empty Cart"
          />
          <p>Your cart is currently empty.</p>
          <button onClick={() => navigate("/")}>Browse Products</button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item._id}>
                <img
                  src={item.imgUrl || "https://via.placeholder.com/100"}
                  alt={item.productName}
                />
                <div className="item-details">
                  <h3>{item.productName}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="item-actions">
                    <button onClick={() => decrement(item._id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increment(item._id)}>+</button>
                  </div>
                  <p className="subtotal">Subtotal: ₹{item.qty * item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total">Total: ₹{orderValue}</div>
            {user?.token ? (
              <button onClick={placeOrder}>Place Order</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login to Order</button>
            )}
            {error && <div className="error">{error}</div>}
          </div>
        </>
      )}
    </div>
  );
}
