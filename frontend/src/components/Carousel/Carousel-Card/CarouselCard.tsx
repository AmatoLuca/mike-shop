import { StyledCarouselCard } from './StyledCarouselCard';
import { CarouselCardProps } from '../Model/index';

const CarouselCard = ({ children }: CarouselCardProps) => {
  return <StyledCarouselCard>{children}</StyledCarouselCard>;
};

export default CarouselCard;
