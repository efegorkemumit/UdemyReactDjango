import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../actions/Cartactions';
import '../my.css';

const PlaceOrderScreen = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className='loginPage'>
      <h1>PLACE ORDER</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product.id}>
          <span className='mleft-20'><img className='img-product-class' src={item.product.image}></img></span>
                <span className='mleft-20'>{item.product.name}</span>
                <span className='mleft-20'>{item.product.price}</span>
                <span className='mleft-20'>
                 
                  {item.quantity}
                </span>
                <span>
                
                </span>
              </li>
            ))}
          </ul>
          <p className='totalprice'>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
        </div>
      )}
      <button >Complete Order</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { removeFromCart, updateQuantity, clearCart })(
    PlaceOrderScreen
);
