import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  let errorMessage;
  if (action.error === 401) {
    errorMessage = "Ошибка авторизации, проверьте данные и повторите попытку";
  }else if (action.error === 400) {
    errorMessage = "Пользователь с таким Email уже существует";
  } else {
    errorMessage = "Произошла ошибка, попробуйте повторите попытку позднее";
  }
  return updateObject(state, {
    error: errorMessage,
    loading: false,
  });
};

const authLogout = (state) => {
  return updateObject(state, { token: null, userId: null });
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default reduser;
