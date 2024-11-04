import { StyledCarousel } from './StyledCarousel';
import Flickity from 'react-flickity-component';
import products from '../../products';
import CarouselCard from './Carousel-Card/CarouselCard';

const flickityOptions = {
  initialIndex: 2,
  draggable: true,
};

const Carousel = () => {
  return (
    <StyledCarousel>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {products.map((imageData) => {
          return (
            <CarouselCard key={imageData._id}>
              <img
                src={imageData.image}
                key={imageData._id}
                className="carouselCardImage"
              />
            </CarouselCard>
          );
        })}
      </Flickity>
    </StyledCarousel>
  );
};

export default Carousel;
