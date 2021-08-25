import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import ProductCard from './ProductCard';
import { Product } from '../models/product.interface';

const ProductList = () => {
  const aplicationContext = useContext(AplicationContext);
  const { dsProducts } = aplicationContext;

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 py-4">
      {dsProducts &&
        dsProducts.map((product: Product) => 
          <ProductCard key={product.id} product={product} />
        )}
    </div>
  );
};

export default ProductList;
