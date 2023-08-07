import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../my.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../actions/ProductActions';



const ProductControlScreen = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  useEffect(() => {
    fetchProducts()
   
  }, []);

  const fetchProducts =()=>{
    fetch('http://127.0.0.1:8000/api/products/')
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error));

  }
  const handleDelete = (id, dispatch) => {
    const confirmed = window.confirm('Are you sure want ?');
    if (confirmed) {
      dispatch(deleteProduct(id))
        .then(() => {
          fetchProducts();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className='container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-12'>
      <table className='table'>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>
          <img className='control-product' src={product.image} alt={product.name} />
        </td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>$ {product.price}</td>
        <td>
          <Link to={`/products/${product.id}`}><Button variant="secondary">View</Button></Link>
          <Button onClick={()=> handleDelete(product.id, dispatch)} variant="danger">Delete</Button>
          <Link to={`/products/update/${product.id}`}><Button variant="info">Update</Button></Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  </div>
  );
};

export default ProductControlScreen;