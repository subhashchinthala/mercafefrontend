import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("");
  const { user } = useContext(AppContext);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchOrders = async () => {
    try {
      const url = `${API_URL}/api/orders/?page=${page}&limit=${limit}&status=${status}`;
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(result.data.orders);
      setTotalPages(result.data.total);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [status, page]);

  const updateOrder = async (status, id) => {
    try {
      const url = `${API_URL}/api/orders/${id}`;
      await axios.patch(url, { status });
      fetchOrders();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="orders-container">
      <h2 className="orders-heading">Order Management</h2>

      <div className="filter-section">
        <label>Filter by Status:</label>
        <select
          className="status-dropdown"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      <ul className="order-list">
        {orders.map((order) => (
          <li key={order._id} className="order-card">
            <div>
              <strong>Order ID:</strong> {order._id}
            </div>
            <div>
              <strong>Value:</strong> ₹{order.orderValue}
            </div>
            <div>
              <strong>Status:</strong> {order.status}
            </div>
            {order.status === "Pending" && (
              <div className="order-actions">
                <button
                  className="btn cancel"
                  onClick={() => updateOrder("cancelled", order._id)}
                >
                  Cancel
                </button>
                <button
                  className="btn complete"
                  onClick={() => updateOrder("completed", order._id)}
                >
                  Complete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          className="btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ⬅ Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="btn"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
