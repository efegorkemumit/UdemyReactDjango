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

// Combine all reducers
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCategory: productCategoryReducer
});

// Create the Redux store
const middleware = [thunk]


const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(...middleware)))


export default store
