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
const GetCurrentSlide = (carousel) => {
  const slideIndex = carousel.findIndex((c) => c.current === true);
  return `carousel-${slideIndex}`;
};

export { GenerateCarouselIndexes, GetCurrentSlide };
