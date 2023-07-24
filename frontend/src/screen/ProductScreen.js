// ProductScreen.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/ProductActions';
import { useParams } from 'react-router-dom'


const ProductScreen = ({ match }) => {
  const {id} =useParams();

  const dispatch = useDispatch();

  // Get product details from the Redux store
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    // Dispatch the getProductDetails action with the product ID when the component mounts
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* Add other product details you want to display */}
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
