import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../actions/Cartactions';
import '../my.css';

const CartScreen = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className='loginPage'>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product.id}>
                <span className='mleft-20'>{item.product.name}</span>
                <span className='mleft-20'>{item.product.price}</span>
                <span>
                  <button
                    className='mleft-20'
                    onClick={() =>
                      updateQuantity(
                        item.quantity > 1 ? item.product.id : null,
                        item.quantity > 1 ? item.quantity - 1 : item.quantity
                      )
                    }
                  >
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                </span>
                <span>
                  <button className='mleft-20' onClick={() => removeFromCart(item.product.id)}>
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <p className='totalprice'>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
        </div>
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
