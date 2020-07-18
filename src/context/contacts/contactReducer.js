import * as contactTypes from "../types";

function contactReducer(state, action) {
  switch (action.type) {
    case contactTypes.ADD_CONTACT:
      return { ...state, users: action.payload };
    case contactTypes.DELETE_CONTACT:
      return { ...state, user: action.payload };
    case contactTypes.GET_CONTACTS:
      return { ...state, users: action.payload };
    case contactTypes.UPDATE_CONTACT:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default contactReducer;
