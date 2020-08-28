import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Icons } from "../components/common";
import { ProductContext, CurrencyContext } from "../contexts";
import { NormalizeSlug } from "../helpers";

const Home = () => {
  const DEFAULT_CURRENCY = "GBP";
  const { products } = useContext(ProductContext);
  const { currency } = useContext(CurrencyContext);
  const { BulletIcon, ChevronIcon, ChevronReverseIcon } = Icons;
  const featured = products.filter((product) => product.isFeatured === true);
  const currencyObject = currency.reduce(function (prev, curr) {
    return curr.code === DEFAULT_CURRENCY ? curr : prev;
  }, null);

  const carouselData = [
    {
      id: "carousel-0",
      imgurl: "/img/carousel/lindisfarne.png",
      current: true,
    },
    {
      id: "carousel-1",
      imgurl: "/img/carousel/armand-de-brignac.png",
      current: false,
    },
    {
      id: "carousel-2",
      imgurl: "/img/carousel/coca-cola.png",
      current: false,
    },
  ];

  const GenerateCarouselIndexes = (carousel) => {
    const carouselWithIndex = carousel.map((c, index) => {
      let carouselLength = carousel.length;
      if (index === 0) {
        c.prevItem = `carousel-${carouselLength - 1}`;
        c.nextItem = `carousel-${index + 1}`;
      } else if (index === carouselLength - 1) {
        c.prevItem = `carousel-${index - 1}`;
        c.nextItem = `carousel-0`;
      } else {
        c.prevItem = `carousel-${index - 1}`;
        c.nextItem = `carousel-${index + 1}`;
      }
      return c;
    });
    return carouselWithIndex;
  };

  const indexedCarousel = GenerateCarouselIndexes(carouselData);

  const GetCurrentSlide = (carousel) => {
    const slideIndex = carousel.findIndex(c => c.current === true );
    return `carousel-${slideIndex}`;
  };

  const [carouselState, setCarouselState] = useState({
    carousel: indexedCarousel,
    currentSlide: GetCurrentSlide(indexedCarousel)
  });

  const navigateToSlide = (slideId) => {
    const {carousel, currentSlide} = carouselState;
    const updatedCarousel = carousel.map((c) => {
      c.current = c.id === slideId ? true : false;
      return c;
    });
    const updatedCurrent= GetCurrentSlide(updatedCarousel);
    setCarouselState({
      currentSlide: updatedCurrent,
      carousel: updatedCarousel
    });
  };

  
  const navigateToPrevSlide = () => {
    const {carousel, currentSlide} = carouselState;
    let prevSlide = null;
    carousel.forEach(c => {
      if(c.id === currentSlide) {
        prevSlide = c.prevItem;
      }
    })
    navigateToSlide(prevSlide);
  };

  const navigateToNextSlide = () => {
    const {carousel, currentSlide} = carouselState;
    let nextSlide = null;
    carousel.forEach(c => {
      if(c.id === currentSlide) {
        nextSlide = c.nextItem;
      }
    });
    navigateToSlide(nextSlide);
  };

  const {carousel} = carouselState;

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2 md:mb-20">
        <div className="m-6 relative shadow">
          <div className="overflow-hidden relative w-full">
            {carousel.map((c) => {
              return (
                <div
                  key={c.id}
                  className={`${
                    c.current ? "static opacity-100" : "absolute opacity-0"
                  } carousel-item transition-opacity ease-out duration-500`}
                >
                  <img
                    className="max-w-100 block min-h-full min-w-full p-64 bg-no-repeat bg-center bg-local bg-cover"
                    style={{ backgroundImage: `url(${c.imgurl})` }}
                  />
                </div>
              );
            })}
            <div className="z-10 absolute flex justify-between w-full top-1/2">
              <span
                onClick={() => navigateToPrevSlide()}
                className="group cursor-pointer md:w-12 lg:w-16 md:h-12 lg:h-16 ml-6 rounded-full bg-black hover:bg-opacity-100 focus:bg-opacity-100 focus:bg-gray-500 bg-opacity-50 focus:outline-none"
              >
                <ChevronReverseIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
              </span>
              <span
                onClick={() => navigateToNextSlide()}
                className="group cursor-pointer md:w-12 lg:w-16 md:h-12 lg:h-16 mr-6 rounded-full bg-black hover:bg-opacity-100 focus:bg-opacity-100 focus:bg-gray-500 bg-opacity-50 focus:outline-none"
              >
                <ChevronIcon className="w-10 h-10 my-3 ml-4 group-focus:text-blue-400 group-hover:text-blue-400" />
              </span>
            </div>
            <ol className="bottom-3 flex rounded-lg bg-opacity-25 w-48 mx-auto bg-black list-none m-0 p-0 inset-x-0 z-10 text-center absolute">
              {carousel.map((c) => {
                return (
                  <li
                    key={c.id}
                    className="inline-block my-3 mx-4"
                    onClick={() => navigateToSlide(c.id)}
                  >
                    <span className="cursor-pointer block">
                      <BulletIcon
                        className="w-8 h-8 focus:text-blue-400 hover:text-blue-400"
                        disabled={c.current}
                        w={8}
                        h={8}
                      />
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="container py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Featured products
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {featured.map((product) => {
              const { id, productName, productPrice, imgUrl } = product;
              return (
                <div
                  className="w-full max-w-sm mx-auto bg-white rounded-md shadow-md  cursor-pointer overflow-hidden hover:shadow-lg"
                  key={id}
                >
                  <Link to={`/product/${NormalizeSlug(id)}`}>
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover bg-no-repeat bg-center"
                      style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">{productName}</h3>
                      <span className="text-gray-500 mt-2">
                        {currencyObject.symbol}
                        {productPrice}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-8">
            <Link
              className="font-bold hover:underline hover:text-blue-400"
              to="/products"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
