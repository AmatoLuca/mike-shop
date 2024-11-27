import { StyledCarousel } from './StyledCarousel';
import Flickity from 'react-flickity-component';
import CarouselCard from './Carousel-Card/CarouselCard';
import { Product } from '../models';
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice';
import useShowMessage from '../../hooks/useShowMessage';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { MessageVariant } from '../../components/Message/models';

const flickityOptions = {
  draggable: true,
};

const Carousel = () => {
  const { data: products, isLoading, error }: any = useGetProductsQuery();

  const { isShowMessage } = useShowMessage(error);

  return (
    <>
      {isLoading && <Loader />}
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={error?.data?.message || error?.error}
        />
      )}
      {products && (
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
      )}
    </>
  );
};

export default Carousel;
