import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'


import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCategoryReducer,
} from './reducers/ProducReducers';
import { userLoginReducer, userDetailsReducer,userRegisterReducer} from './reducers/UserReducers';

// Combine all reducers
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCategory: productCategoryReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

// Create the Redux store
const middleware = [thunk]


const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(...middleware)))


export default store
