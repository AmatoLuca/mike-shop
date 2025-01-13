import { useState, useCallback } from 'react';
import { StyledRating } from './Rating.styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Reviews from './Reviews/Reviews';
import Stars from './Stars/Stars';
import { RatingComponentProps } from './models';

const Rating = ({ value, text, product }: RatingComponentProps) => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);

  const clickHanlder = useCallback(() => {
    setIsReviewOpened((prev) => !prev);
  }, []);

  return (
    <StyledRating>
      <div className="rating-wrapper">
        <div className="rating-summary" onClick={clickHanlder}>
          <div className="rating-summary__text">{text}</div>
          <div className="rating-summary__stars-container">
            <div className="rating-summary__stars">
              <Stars value={value} />
            </div>
            <div className="rating-summary__stars-icon">
              {isReviewOpened ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>
        </div>

        {isReviewOpened && <Reviews product={product} />}
      </div>
    </StyledRating>
  );
};

export default Rating;
