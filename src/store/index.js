import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLE = "MULTIPLE";
export const DIVIDER = "DIVIDER";
export const RESET = "RESET";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 2,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 2,
      };
    case MULTIPLE:
      return {
        ...state,
        value: state.value * 2,
      };
    case DIVIDER:
      return {
        ...state,
        value: state.value / 2,
      };
    case RESET:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

const initialState = {
  value: 0,
};

export const store = createStore(reducer, initialState);
