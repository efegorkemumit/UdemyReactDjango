import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_SUCCESS,
    USER_PROFILE_UPDATE_FAIL,
    USER_PROFILE_UPDATE_RESET
  } from '../constans/UserConstants';
  
  const initialState = {
    userInfo: null,
    loading: false,
    error: null,
    userProfile: {},

  };
  
  export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state, loading: true };
      case USER_LOGIN_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case USER_LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload };
      case USER_LOGIN_LOGOUT:
        return { ...state, userInfo: null };
      default:
        return state;
    }
  };
  
  export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { ...state, loading: true };
      case USER_REGISTER_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      case USER_DETAILS_RESET:
        return { loading: true };
      default:
        return state;
    }
  };
  
  export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_PROFILE_UPDATE_REQUEST:
        return { loading: true };
      case USER_PROFILE_UPDATE_SUCCESS:
        return { loading: false, success:true, userInfo: action.payload };
      case USER_PROFILE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case USER_PROFILE_UPDATE_RESET:
        return { userInfo:{} };

      default:
        return state;
    }
  };