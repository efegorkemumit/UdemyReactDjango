import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../actions/AdminActions';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Order List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Total: {order.total}</p>
              <p>Created: {new Date(order.created).toLocaleString()}</p>
              <p>Updated: {new Date(order.updated).toLocaleString()}</p>
              <p>User ID: {order.user}</p>
              <p>Items:</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item}>Item ID: {item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderScreen;
