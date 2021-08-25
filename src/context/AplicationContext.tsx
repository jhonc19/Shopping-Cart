import React from 'react';
import { ShoppingCartItem } from '../models/shoppingCart.interface';

const initialState = {
  getProducts: () => {},
  addItemCart: (itemCart: ShoppingCartItem) => {},
  cleanShoppingCart: () => {},
  calculateTotalPrices: (dataCartShop: ShoppingCartItem[]) => {},
  changeAmount: (idCartItem: number, valueAmount: number) => {},
  deleteItemCart: (idCartItem: number) => {},
  getProductsById: (idProduct: number) => {},
  dsProducts: [],
  dsCartItem: [],
  totalPrice: 0,
};

const aplicationContext = React.createContext(initialState);

export default aplicationContext;
