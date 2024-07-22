import { Type } from "./action.type";

export const initialState = {
  basket: [], // initialize basket as an empty array
};

export const reducer = (state, action) => {
  

  // }
switch (action.Type) {
  case Type.ADD_TO_BASKET:
    const existingItem = state.basket.find(
      (item) => item.id === action.item.id
    );
    if (!existingItem) {
      return {
        ...state,
        basket: [...state.basket, { ...action.item, amount: 1 }],
      };
    } else {
      const updatedBasket = state.basket.map((item) => {
        item.id === action.item.id
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      return {
        ...state,
        basket: updatedBasket,
      };
    }
  default:
    return state;
}

};

// export { initialState, reducer };
