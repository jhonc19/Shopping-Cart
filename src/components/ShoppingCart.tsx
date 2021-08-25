import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import { ShoppingCartItem as CartItem } from '../models/shoppingCart.interface';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
  const aplicationContext = useContext(AplicationContext);
  const { dsCartItem, cleanShoppingCart, totalPrice } = aplicationContext;

  return (
    <div className="absolute right-1 z-20 mt-1 overflow-hidden bg-blue-500 rounded-bl-lg rounded-br-lg shadow-lg w-80 lg:w-96 p-5 text-white">
      <p className="font-bold text-lg pb-3 border-b border-gray-400">
        Carrito de Compras
      </p>
      <div className="py-2 max-h-96 overflow-y-auto">
        {dsCartItem &&
          dsCartItem.map((carItem: CartItem) => (
            <ShoppingCartItem key={carItem.id} cartItem={carItem} />
          ))}
        {/* <ShoppingCartItem /> */}
      </div>
      <div className="font-semibold pb-3">
        <div className="flex justify-between py-2">
          <p>Total:</p>
          <p>S/.{totalPrice}</p>
        </div>
      </div>
      <button className="w-full bg-white text-blue-500 rounded-lg text-lg p-1 font-medium">
        Pagar
      </button>
      <p
        className="text-right text-xs pt-2 cursor-pointer"
        onClick={cleanShoppingCart}
      >
        Limpiar Carro
      </p>
    </div>
  );
};

export default ShoppingCart;
