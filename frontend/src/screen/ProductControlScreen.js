import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProduct,
  deleteProduct,
  updateProduct,
  listProducts
} from '../actions/ProductActions';

const ProductControlScreen = () => {
  const dispatch = useDispatch();
  
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productName, setProductName] = useState('');
  // ... You might have other product fields here ...

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleCreate = () => {
    // Your logic for product creation.
    // For the sake of simplicity, only a name is being created.
    const product = { name: productName };
    dispatch(createProduct(product));
  };

  const handleUpdate = () => {
    const updatedProduct = { ...selectedProduct, name: productName };
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>Product Control</h2>
          
          <h3>Create Product</h3>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
          <button onClick={handleCreate}>Create</button>
          
          <h3>Products</h3>
          <ul>
            {products.map(product => (
              <li key={product._id}>
                {product.name} 
                <button onClick={() => setSelectedProduct(product)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </li>
            ))}
          </ul>

          {selectedProduct && (
            <div>
              <h3>Update Product</h3>
              <input 
                type="text" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)} 
              />
              <button onClick={handleUpdate}>Update</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductControlScreen;
