/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import AplicationContext from '../context/AplicationContext';

type AplicationStateProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AplicationStateProps) => {
  const aplicationContext = useContext(AplicationContext);
  const { getProducts, dsCartItem, calculateTotalPrices } = aplicationContext;

  useEffect(() => {
    console.log('Entro al useEfect');
    getProducts();
  }, []);

  useEffect(() => {
    calculateTotalPrices(dsCartItem);
  }, [dsCartItem]);

  return (
    <>
      <Header />
      <div className="layoudChildren">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
