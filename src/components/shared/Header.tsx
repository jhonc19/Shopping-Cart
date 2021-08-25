import React, { useContext, useState } from 'react';
import { FaShopify, FaShoppingCart } from 'react-icons/fa';

// import CartShop from './CartShop';
import AplicationContext from '../../context/AplicationContext';
import ShoppingCart from '../ShoppingCart';

const Header = () => {
  const aplicationContext = useContext(AplicationContext);
  const { dsCartItem } = aplicationContext;

  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="headerContainer">
        <div className="headerLogo">
          <p className="headerLogoText">Shopify</p>
          <FaShopify />
        </div>
        <button onClick={handleModal} className="relative">
          <FaShoppingCart />
          <span className="headerBadge">{dsCartItem.length}</span>
        </button>
      </div>
      {openModal && <ShoppingCart />}
    </>
  );
};

export default Header;
