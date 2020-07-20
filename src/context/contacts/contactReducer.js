import * as contactTypes from "../types";

function contactReducer(state, action) {
  switch (action.type) {
    case contactTypes.ADD_CONTACT:
      return [
        ...state,
        {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          avatar: `https://api.adorable.io/avatars/50/${
            action.payload.firstname + action.payload.lastname
          }@adorable`,
          id: Date.now(),
        },
      ];
    case contactTypes.DELETE_CONTACT:
      return state.filter((el) => el.id !== action.payload.id);
    case contactTypes.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case contactTypes.UPDATE_CONTACT:
      return state.map((el) =>
        el.id === action.payload.id
          ? {
              id: el.id,
              firstname: action.payload.firstname,
              lastname: action.payload.lastname,
              email: action.payload.email,
              avatar: `https://api.adorable.io/avatars/50/${
                action.payload.firstname + action.payload.lastname
              }@adorable`,
            }
          : el
      );
    default:
      return state;
  }
}

export default contactReducer;
