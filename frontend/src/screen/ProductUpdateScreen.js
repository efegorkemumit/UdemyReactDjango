import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, updateProduct } from '../actions/ProductActions';
import { useParams } from 'react-router-dom';

const ProductUpdateScreen = ({ match, history }) => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading, error, success } = productUpdate;

  const productDetails = useSelector((state) => state.productDetails);
  const {  product : fetchProduct } = productDetails;

  useEffect(() => {

    dispatch(getProductDetails(id));
   

    const product = {
      _id: id,
      name: fetchProduct.name,
      price: fetchProduct.price,
      description: fetchProduct.description,
    };

    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    // Update the product with the new data
    const updatedProduct = {
      _id: id,
      name,
      price,
      description,
      // Add other fields as needed
    };

    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div>
      <h1>Edit Product</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Product updated successfully</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default ProductUpdateScreen;
