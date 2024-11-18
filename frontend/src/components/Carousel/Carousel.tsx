import { useState, useEffect } from 'react';
import { StyledCarousel } from './StyledCarousel';
import Flickity from 'react-flickity-component';
import CarouselCard from './Carousel-Card/CarouselCard';
import { Product } from '../models';
import axios from 'axios';

const flickityOptions = {
  draggable: true,
};

const Carousel = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
