import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.item.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.reduce((acc, item) => {
          if (item.id === action.id) {
            if (item.amount > 1) {
              acc.push({ ...item, amount: item.amount - 1 });
            }
          } else {
            acc.push(item);
          }
          return acc;
        }, []),
      };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

// import React, { createContext, useReducer } from "react";

// export const DataContext = createContext();

// const initialState = { basket: [] };

// const reducer = (state, action) => {
//   switch (action.type) {
//     // Define your reducer logic here
//     default:
//       return state;
//   }
// };

// export const DataProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <DataContext.Provider value={[state, dispatch]}>
//       {children}
//     </DataContext.Provider>
//   );
// };
