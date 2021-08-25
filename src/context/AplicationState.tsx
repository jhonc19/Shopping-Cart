import React, { useReducer } from 'react';
import AplicationContext from './AplicationContext';
import AplicationReducer from './AplicationReducer';
import axios from 'axios';
import { Product } from '../models/product.interface';
// import { getSubtotal, roundNumber } from '../utils';
import { ShoppingCartItem } from '../models/shoppingCart.interface';
import { calculatePrices } from '../utils/index';

type AplicationStateProps = {
  children: React.ReactNode;
};

const AplicationState = ({ children }: AplicationStateProps) => {
  const shippingPrice = 40;

  const initialState = {
    subTotal: 0,
    shipping: shippingPrice,
    total: 0,
    dsCartItem: [],
    dsProducts: [],
  };

  const baseUrl = `https://fakestoreapi.com/`;

  const getProducts = async () => {
    const url = `${baseUrl}/products`;
    const { data } = await axios.get(url);

    dispatch({
      type: 'SET_PRODUCTS',
      payload: data,
    });
  };

  const getProductsById = async (idProduct: number): Promise<Product> => {
    const url = `${baseUrl}/products/${idProduct}`;
    const { data } = await axios.get(url);

    return data;
  };

  const addItemCart = (itemCart: ShoppingCartItem) => {
    dispatch({
      type: 'ADD_CARTITEM',
      payload: itemCart,
    });
  };

  const cleanShoppingCart = () => {
    dispatch({
      type: 'CLEAN_SHOPPINGCART',
      payload: [],
    });
  };

  const calculateTotalPrices = (dataCartShop: ShoppingCartItem[]) => {
    const totalPrices = calculatePrices(dataCartShop);

    dispatch({
      type: 'SET_TOTALPRICES',
      payload: totalPrices,
    });
  };

  const changeAmount = (idCartItem: number, valueAmount: number) => {
    dispatch({
      type: 'CHANGE_AMOUNTCARTITEM',
      payload: { idCartItem, valueAmount },
    });
  };

  const deleteItemCart = (idCartItem: number) => {
    dispatch({
      type: 'DELETE_CARTITEM',
      payload: idCartItem,
    });
  };

  const [state, dispatch] = useReducer(AplicationReducer, initialState);

  return (
    <AplicationContext.Provider
      value={{
        getProducts,
        addItemCart,
        cleanShoppingCart,
        calculateTotalPrices,
        changeAmount,
        deleteItemCart,
        getProductsById,
        dsProducts: state.dsProducts,
        dsCartItem: state.dsCartItem,
        totalPrice: state.totalPrice,
      }}
    >
      {children}
    </AplicationContext.Provider>
  );
};

export default AplicationState;
