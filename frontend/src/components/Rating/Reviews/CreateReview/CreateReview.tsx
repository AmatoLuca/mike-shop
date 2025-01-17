import { useCallback, useState } from 'react';
import { StyledCreateReview } from './StyledCreateReview';
import { Rating } from '../models';
import {
  useCreateReviewMutation,
  useGetProductDetailsQuery,
} from '../../../../redux/slices/productsApiSlice';
import {
  CreateReviewRequest,
  GetProductDetailsResponse,
} from '../../../../redux/hooks';
import { useParams } from 'react-router-dom';
import { ProductIdParams } from '../../../../screens/models';
import Message from '../../../Message/Message';
import useShowMessage from '../../../../hooks/useShowMessage';
import { MessageVariant } from '../../../Message/models';
import Loader from '../../../Loader/Loader';
import { GetUserInfo } from '../../../../redux/selectors';

const CreateReview = () => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const [rating, setRating] = useState<Rating>(Rating.NONE);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const UserInfoState = GetUserInfo();

  const { id: productId } = useParams<ProductIdParams>();

  const [
    createReview,
    { isLoading: isLoadingProductReview },
  ]: CreateReviewRequest = useCreateReviewMutation();

  const { refetch }: GetProductDetailsResponse = useGetProductDetailsQuery(
    productId as string
  );

  const { isShowMessage } = useShowMessage(errorMessage);

  const clickHanlder = useCallback(() => {
    setIsReviewOpened((prev) => !prev);
  }, []);

  const submitHandler = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        await createReview({
          productId,
          rating,
          comment,
          name: UserInfoState.name,
        }).unwrap();
        setRating(Rating.NONE);
        setComment('');
        refetch();
      } catch (error: any) {
        if (error instanceof Error) {
          setErrorMessage(
            error.message ||
              'Sorry, an error occurred during comment creation process.'
          );
        } else {
          setErrorMessage(error?.data.message);
        }
      } finally {
        setIsReviewOpened(false);
      }
    },
    [productId, rating, comment, refetch, clickHanlder]
  );

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={errorMessage as string}
        />
      )}

      {isLoadingProductReview ? (
        <Loader />
      ) : (
        <StyledCreateReview>
          <div className="review-create" onClick={clickHanlder}>
            <span className="review-create_action-title">Write a review</span>
          </div>

          {isReviewOpened && (
            <form
              action=""
              className="review-create-form"
              onSubmit={submitHandler}
            >
              <select
                name="rating"
                id="rating"
                required
                value={rating}
                onChange={(e) => setRating(e.target.value as Rating)}
              >
                <option value="">Select...</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>

              <textarea
                name="comment"
                id="comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <button className="review-create-submit">create</button>
            </form>
          )}
        </StyledCreateReview>
      )}
    </>
  );
};

export default CreateReview;
