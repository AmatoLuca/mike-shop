import { StyledReviews } from './Reviews.styled';
import { GetUserInfo } from '../../../redux/selectors';
import { ReviewsProps } from './models';
import CreateReview from './CreateReview/CreateReview';
import Stars from '../Stars/Stars';

const Reviews = ({ product }: ReviewsProps) => {
  const UserInfoState = GetUserInfo();

  return (
    <StyledReviews>
      {UserInfoState._id && <CreateReview />}
      {product.reviews &&
        product.reviews.map((review) => (
          <div className="review-info-wrapper" key={review._id}>
            <div className="review-info-header">
              <Stars value={review.rating} />
              <div className="review-info-header_info">{`${
                review.name
              } ${review.createdAt.substring(0, 9)}`}</div>
            </div>
            <div className="review-info-content">{review.comment}</div>
          </div>
        ))}
    </StyledReviews>
  );
};

export default Reviews;
