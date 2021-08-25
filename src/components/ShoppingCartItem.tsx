import React, { useContext } from 'react';
import { FaTrash, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { ShoppingCartItem as CartItem } from '../models/shoppingCart.interface';
import AplicationContext from '../context/AplicationContext';

type ShoppingCartItemProps = {
  cartItem: CartItem;
};

const ShoppingCartItem = ({ cartItem }: ShoppingCartItemProps) => {
  const aplicationContext = useContext(AplicationContext);
  const { changeAmount, deleteItemCart } = aplicationContext;
  const { id, title, amount, price, image } = cartItem;

  return (
    <div className="flex py-4 border-b border-gray-400">
      <div className="flex flex-col justify-center w-20 h-20 bg-white rounded-md">
        <img className="w-full max-h-20" src={image} alt="" />
      </div>
      <div className="flex justify-between w-full px-2">
        <div className="flex flex-col justify-between">
          <p className="font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap w-40">
            {title}
          </p>
          <div>
            <p className="text-xs">Cantidad</p>
            <div className="flex">
              <button onClick={() => changeAmount(id, 1)}>
                <FaPlusCircle />
              </button>
              <p className="px-1 font-bold">{amount}</p>
              <button>
                <FaMinusCircle onClick={() => changeAmount(id, -1)} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-lg font-medium self-end">S/{price}</p>
          <button className="flex items-center self-end">
            <FaTrash className="text-sm" />
            <p className="text-xs pl-1" onClick={() => deleteItemCart(id)}>
              Quitar producto
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
