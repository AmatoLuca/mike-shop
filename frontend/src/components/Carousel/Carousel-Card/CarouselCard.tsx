import { StyledCarouselCard } from './StyledCarouselCard';
import { CarouselCardProps } from '../Model';
import { Link } from 'react-router-dom';

const CarouselCard = ({ productId, imageLink }: CarouselCardProps) => {
  return (
    <StyledCarouselCard>
      <Link to={`/product/${productId}`}>
        <img src={imageLink} className="carouselCardImage" />
      </Link>
    </StyledCarouselCard>
  );
};

export default CarouselCard;
