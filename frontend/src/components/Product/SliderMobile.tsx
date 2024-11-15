import Flickity from 'react-flickity-component';
import { StyledSliderMobile } from './StyledSliderMobile';
import { StyledCarouselCard } from '../Carousel/Carousel-Card/StyledCarouselCard';

const flickityOptions = {
  draggable: true,
};

const SliderMobile = ({ product }: any) => {
  return (
    <StyledSliderMobile>
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
    </StyledSliderMobile>
  );
};

export default SliderMobile;
