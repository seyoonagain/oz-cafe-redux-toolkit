export const addToCart = (item) => {
  return {
    type: 'accToCart',
    payload: item,
  };
};
export const removeFromCart = (id) => {
  return {
    type: 'removerFromCart',
    payload: id,
  };
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'accToCart':
      return [...state, action.payload];
    case 'removerFromCart':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
