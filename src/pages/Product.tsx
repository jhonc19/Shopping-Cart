import React from 'react';
import { useParams } from 'react-router-dom';

interface MatchParams {
  id: string;
}

const Product = () => {
  const { id } = useParams<MatchParams>();

  return (
    <div className="flex w-full">
      <div className="w-5/12">imagen</div>
      <div className="w-7/12 p-5">
        <h1 className="text-2xl font-bold pb-10">Product - {id}</h1>
        <p className="pb-3">Product Description</p>
        <p className="pb-3">Description</p>
        <p>Product Category</p>
      </div>
    </div>
  );
};

export default Product;
