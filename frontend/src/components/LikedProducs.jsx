import React from 'react';

const LikedProducts = ({ clickedProducts }) => {
  return (
    <div className="text-center">
      <h2>Wish list</h2>
      <p>Liked products</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {clickedProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 shadow-md">
            <img
              src={product.image}
              alt={product.description}
              className="hover:grow hover:shadow-lg object-cover w-full aspect-square"
            />
            <p className="text-gray-800 font-bold">{product.description}</p>
            <p className="text-gray-500">ID: {product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedProducts;
