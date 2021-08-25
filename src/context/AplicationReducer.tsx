import {
  changeAmountCartItem,
  addCartItem,
  deleteCartItem,
} from '../utils/index';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        dsProducts: action.payload,
      };

    case 'ADD_CARTITEM':
      return {
        ...state,
        dsCartItem: addCartItem(state.dsCartItem, action.payload),
      };

    case 'CLEAN_SHOPPINGCART':
      return {
        ...state,
        dsCartItem: action.payload,
      };

    case 'SET_TOTALPRICES':
      return {
        ...state,
        totalPrice: action.payload,
      };

    case 'CHANGE_AMOUNTCARTITEM':
      return {
        ...state,
        dsCartItem: changeAmountCartItem(
          state.dsCartItem,
          action.payload.idCartItem,
          action.payload.valueAmount
        ),
      };

    case 'DELETE_CARTITEM':
      return {
        ...state,
        dsCartItem: deleteCartItem(state.dsCartItem, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
