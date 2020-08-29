import React, { useState, useEffect } from "react";
import { Icons } from "../components/common";
import { GenerateCarouselIndexes, GetCurrentSlide } from "../helpers";

const Carousel = () => {
  const { BulletIcon, ChevronIcons } = Icons;
  const carouselData = [
    {
      id: "carousel-0",
      imgurl: "/img/carousel/lindisfarne.png",
      content: {
        heading: "The nectar of the gods is now FREE!",
        description:
          "You can get the World's finest LindisFarne mead for free on purchase of the same. Buy one Get one Free! Why not Buy two and Get two free?. Hurry offer valid until stocks last.",
      },
      current: true,
    },
    {
      id: "carousel-1",
      imgurl: "/img/carousel/armand-de-brignac.png",
      content: {
        heading: "Live the life of Luxury",
        description:
          "The Armand de Brignac Blanc Gold Champagne is pressed from an exclusive selection of Chardonnay grown in Premier Cru and Grand Cru vineyards in the Montagne de Reims and Côte de Blancs for an exquisitely pure, clean, and effervescent palat",
      },
      current: false,
    },
    {
      id: "carousel-2",
      imgurl: "/img/carousel/coca-cola.png",
      content: {
        heading: "Spice up your drinks!",
        description: "The Coca-Cola Signature Mixers Spicy comes with a warm introduction that gives way to a fiery finish, it is a sophisticated and complex blend of citrusy lime, ginger, spicy jalapeño, fragrant rosemary and aromatic jasmine that pairs beautifully with dark rums and silver tequilas."
      },
      current: false,
    },
  ];

  const indexedCarousel = GenerateCarouselIndexes(carouselData);

  const carouselInterval = 8000;

  const [carouselState, setCarouselState] = useState({
    carousel: indexedCarousel,
    currentSlide: GetCurrentSlide(indexedCarousel),
  });

  useEffect(() => {
    let carouselTimer = setInterval(() => {
      navigateToNextSlide();
    }, carouselInterval);
    return () => {
      clearInterval(carouselTimer);
    };
  }, [carouselState.currentSlide]);

  const navigateToSlide = (slideId) => {
    const { carousel } = carouselState;
    const updatedCarousel = carousel.map((c) => {
      c.current = c.id === slideId ? true : false;
      return c;
    });
    const updatedCurrent = GetCurrentSlide(updatedCarousel);
    setCarouselState({
      currentSlide: updatedCurrent,
      carousel: updatedCarousel,
    });
  };

  const navigateToPrevSlide = () => {
    const { carousel, currentSlide } = carouselState;
    let prevSlide = null;
    carousel.forEach((c) => {
      if (c.id === currentSlide) {
        prevSlide = c.prevItem;
      }
    });
    navigateToSlide(prevSlide);
  };

  const navigateToNextSlide = () => {
    const { carousel, currentSlide } = carouselState;
    let nextSlide = null;
    carousel.forEach((c) => {
      if (c.id === currentSlide) {
        nextSlide = c.nextItem;
      }
    });
    navigateToSlide(nextSlide);
  };

  const { carousel } = carouselState;
  const { ChevronRightIcon, ChevronLeftIcon} = ChevronIcons;

  return (
    <div className="overflow-hidden relative w-full">
      {carousel.map((c) => {
        const { id, current, imgurl, content } = c;
        const { heading, description } = content;
        return (
          <div
            key={id}
            className={`${
              current ? "static opacity-100" : "absolute opacity-0"
            } carousel-item transition-opacity ease-out duration-500`}
          >
            <img
              className="max-w-100 block min-h-full min-w-full p-64 bg-no-repeat bg-center bg-local bg-cover"
              style={{ backgroundImage: `url(${imgurl})` }}
              alt={heading}
            />
            <div className="absolute inset-x-50 top-1/6 z-10 w-full md:w-3/4 px-6 md:px-32">
              <h2 className="bg-black bg-opacity-25 md:bg-opacity-75 text-gray-300 w-full md:w-2/3 text-2xl md:text-5xl px-5 py-3 mb-2">
                {heading}
              </h2>
              <p className="bg-black bg-opacity-25 md:bg-opacity-75 text-gray-300 text-xl px-5 py-3 w-full md:w-9/12 mb-3">
                {description}
              </p>
            </div>
          </div>
        );
      })}
      <div className="z-10 absolute flex justify-between w-full top-1/4 md:top-1/2">
        <span
          onClick={() => navigateToPrevSlide()}
          className="group cursor-pointer md:w-12 lg:w-16 md:h-12 lg:h-16 md:ml-6 rounded-full bg-black hover:bg-opacity-100 focus:bg-opacity-100 focus:bg-gray-500 bg-opacity-50 focus:outline-none"
        >
          <ChevronLeftIcon className="w-8 h-10 my-3 m-4 group-focus:text-blue-400 group-hover:text-blue-400" />
        </span>
        <span
          onClick={() => navigateToNextSlide()}
          className="group cursor-pointer md:w-12 lg:w-16 md:h-12 lg:h-16 md:mr-6 rounded-full bg-black hover:bg-opacity-100 focus:bg-opacity-100 focus:bg-gray-500 bg-opacity-50 focus:outline-none"
        >
          <ChevronRightIcon className="w-10 h-10 my-3 ml-4 mr-2 group-focus:text-blue-400 group-hover:text-blue-400" />
        </span>
      </div>
      <ol className="bottom-5 flex rounded-lg bg-opacity-25 w-48 mx-auto bg-black list-none m-0 p-0 inset-x-0 z-10 text-center absolute">
        {carousel.map((c) => {
          const {id, current} = c;
          return (
            <li
              key={id}
              className="inline-block my-3 mx-4"
              onClick={() => navigateToSlide(id)}
            >
              <span className="cursor-pointer block">
                <BulletIcon
                  className="w-8 h-8 focus:text-blue-400 hover:text-blue-400"
                  disabled={current}
                  w={8}
                  h={8}
                />
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Carousel;
