import React, { useState } from 'react';
import produtos from '../utils/Produtos';
import HeartIcon from '../constant/Heart';
import LikedProducts from '../components/LikedProducs';

import LazyLoad from 'react-lazyload';

import { BiFilterAlt } from 'react-icons/bi';
import { BsSearchHeart } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import swal from 'sweetalert';

export default function Products() {
  const [liked, setLiked] = useState(false);
  const [likedSearch, setLikedSearch] = useState(false);

  const [clickedProducts, setClickedProducts] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleLikeClick = (e, produto) => {
    e.preventDefault();

    // Check if the product is already clicked
    const isProductClicked = clickedProducts.some(
      (product) => product.id === produto.id
    );

    if (!isProductClicked) {
      setClickedProducts((prevClickedProducts) => [
        ...prevClickedProducts,
        produto,
      ]);
      setLiked(true);
      swal('Liked!', 'This product was added to your wish list', 'success');
    } else {
      swal('Already Liked!', 'You have already liked this product', 'info');
    }
  };

  const handleLikedSearch = (e) => {
    e.preventDefault();
    setLikedSearch(true);
  };

  const deleteProduct = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will need to look for this product on our store again',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your favorite product was deleted!', {
          icon: 'success',
        });
        setClickedProducts(
          clickedProducts.filter((product) => product.id !== id)
        );
        if (clickedProducts.length <= 1) {
          setLikedSearch(false);
          setLiked(false);
        }
      } else {
        swal('Your favorite product is safe!');
      }
    });
  };

  return (
    <section id="shop" className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-center pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#shop"
              onClick={() => setLikedSearch(false)}
            >
              Latest Products
            </a>

            <div className="flex items-center" id="store-nav-content">
              <a
                className="pl-3 inline-block no-underline hover:text-black"
                href="#shop"
              >
                <BiFilterAlt />
              </a>
              {liked && (
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#shop"
                  onClick={(e) => handleLikedSearch(e)}
                >
                  <BsSearchHeart />
                </a>
              )}
            </div>
          </div>
        </nav>
        {likedSearch ? (
          <LikedProducts
            clickedProducts={clickedProducts}
            onDelete={deleteProduct}
          />
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {produtos.map((produto) => (
              <div key={produto.id} className="p-6">
                <a href="#shop" className="flex flex-col">
                  <div className="mb-4">
                    {!isLoaded && <AiOutlineLoading3Quarters />}
                    <LazyLoad height={200} offset={100}>
                      <img
                        className="hover:grow hover:shadow-lg object-cover w-full aspect-square"
                        src={produto.image}
                        alt={produto.Description}
                        onLoad={handleImageLoad}
                        style={{ display: isLoaded ? 'block' : 'none' }}
                      />
                    </LazyLoad>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>{produto.Description}</p>
                    <div className="flex items-center">
                      <p className="pt-1 text-gray-900">€{produto.Price}</p>
                      <button onClick={(e) => handleLikeClick(e, produto)}>
                        <HeartIcon />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
