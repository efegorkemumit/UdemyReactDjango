import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../actions/Cartactions';

const CartScreen = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <span>{item.product.name}</span>
              <span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                  +
                </button>
              </span>
              <span>
                <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
              </span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { removeFromCart, updateQuantity, clearCart })(
  CartScreen
);
