import { StyledCarousel } from './StyledCarousel';
import Flickity from 'react-flickity-component';
import CarouselCard from './Carousel-Card/CarouselCard';
import { Product } from '../models';
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice';
import Loader from '../Loader/Loader';

const flickityOptions = {
  draggable: true,
};

const Carousel = () => {
  const { data: products, isLoading, error }: any = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error?.data?.message || error?.error}</div>;
  }

  return (
    <StyledCarousel>
      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {products.map((imageData: Product) => {
          return (
            <CarouselCard
              key={imageData._id}
              productId={imageData._id}
              imageLink={imageData.images[0]}
            />
          );
        })}
      </Flickity>
    </StyledCarousel>
  );
};

export default Carousel;
