import { ShoppingCartItem } from '../models/shoppingCart.interface';

export const calculatePrices = (dsCartItem: ShoppingCartItem[]) => {
  const totalPrices = dsCartItem.reduce(
    (acc, el) => acc + el.amount * el.price,
    0
  );
  return totalPrices;
};

export const addCartItem = (
  dsCartItem: ShoppingCartItem[],
  itemCart: ShoppingCartItem
) => {
  const index = dsCartItem.findIndex((el) => el.id === itemCart.id);
  let arrModified = [...dsCartItem];
  index >= 0
    ? (arrModified = changeAmountCartItem(arrModified, itemCart.id, 1))
    : arrModified.unshift(itemCart);

  return arrModified;
};

export const deleteCartItem = (
  dsCartItem: ShoppingCartItem[],
  idCartItem: number
) => {
  const index = dsCartItem.findIndex((el) => el.id === idCartItem);
  let arrModified = [...dsCartItem];
  index >= 0 && arrModified.splice(index, 1);

  return arrModified;
};

export const changeAmountCartItem = (
  dsCartItem: ShoppingCartItem[],
  idCartItem: number,
  valueAmount: number
) => {
  const index = dsCartItem.findIndex((el) => el.id === idCartItem);
  let arrModified = [...dsCartItem];

  arrModified[index].amount + valueAmount > 0 &&
    (arrModified[index] = {
      ...arrModified[index],
      amount: arrModified[index].amount + valueAmount,
    });

  return arrModified;
};
