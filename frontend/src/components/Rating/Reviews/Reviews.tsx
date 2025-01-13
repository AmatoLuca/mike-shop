import { StyledReviews } from './Reviews.styled';
import { useCreateReviewMutation } from '../../../redux/slices/productsApiSlice';
import { CreateReviewRequest } from '../../../redux/hooks';
import { GetUserInfo } from '../../../redux/selectors';
import { ReviewsProps } from './models';
import CreateReview from './CreateReview/CreateReview';

const Reviews = ({ product }: ReviewsProps) => {
  const UserInfoState = GetUserInfo();

  const [
    createReview,
    { isLoading: isLoadingProductReview },
  ]: CreateReviewRequest = useCreateReviewMutation();

  return (
    <StyledReviews>
      {UserInfoState._id && <CreateReview />}
      Review
    </StyledReviews>
  );
};

export default Reviews;
