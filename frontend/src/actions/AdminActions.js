// actions.js
import axios from 'axios';
import * as types from '../constans/AdminConstans';

export const fetchOrders = () => async (dispatch, getState) => {
  try {
    const{
        userLogin: {userInfo}, 
      }= getState()
  
      const config = {
        headers:{
          'Content-type': 'application/json',
          Authorization : `Bearer ${userInfo.token}`
        }
      }

    dispatch({ type: types.FETCH_ORDERS_REQUEST });
    const response = await axios.get('http://127.0.0.1:8000/api/orders/orders/',config);
    dispatch({ type: types.FETCH_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.FETCH_ORDERS_FAILURE, payload: error.message });
  }
};

// Add more actions as needed for create, update, and delete
