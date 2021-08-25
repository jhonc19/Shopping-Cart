import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import { Product } from '../models/product.interface';
import { ShoppingCartItem } from '../models/shoppingCart.interface';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, description, image, price } = product;
  const aplicationContext = useContext(AplicationContext);
  const { addItemCart } = aplicationContext;

  const addShoppingCart = () => {
    const itemCart: ShoppingCartItem = {
      id: id,
      amount: 1,
      image: image,
      price: price,
      title: title,
    };

    addItemCart(itemCart);

    // ToastAlert.fire({
    //   icon: 'success',
    //   title: 'Se añadio a carrito',
    // });
  };

  return (
    <div className="shadow-lg w-full py-4 px-6 rounded-md">
      <div className="flex h-40 mb-4 justify-center">
        <img src={image} alt={title} className="h-full" />
      </div>
      <div className="mb-4 overflow-ellipsis overflow-hidden">
        <h1 className="mb-2 whitespace-nowrap font-medium">{title}</h1>
        <h2 className="text-justify text-xs whitespace-normal h-40">
          {description}
        </h2>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-medium">{`S/${price}`}</p>
        <button className="px-3 py-1 bg-blue-500 text-white" onClick={addShoppingCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
