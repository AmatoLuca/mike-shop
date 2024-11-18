import Flickity from 'react-flickity-component';
import { StyledProductSlider } from './StyledProductSlider';
import { StyledCarouselCard } from '../../Carousel/Carousel-Card/StyledCarouselCard';

const flickityOptions = {
  draggable: true,
};

const ProductSlider = ({ product }: any) => {
  return (
    <StyledProductSlider>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {product.images.map((imageData: string) => {
          return (
            <StyledCarouselCard key={imageData}>
              <img src={imageData} className="carouselCardImage" />
            </StyledCarouselCard>
          );
        })}
      </Flickity>
    </StyledProductSlider>
  );
};

export default ProductSlider;
