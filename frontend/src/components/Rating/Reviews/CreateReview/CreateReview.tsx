import { useCallback, useState } from 'react';
import { StyledCreateReview } from './StyledCreateReview';
import { Rating } from '../models';

const CreateReview = () => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const [rating, setRating] = useState<Rating>(Rating.NONE);
  const [comment, setComment] = useState('');

  const clickHanlder = useCallback(() => {
    setIsReviewOpened((prev) => !prev);
  }, []);

  return (
    <StyledCreateReview>
      <div className="review-create" onClick={clickHanlder}>
        <span className="review-create_action-title">Write a review</span>
      </div>

      {isReviewOpened && (
        <form action="" className="review-create-form">
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
  );
};

export default CreateReview;
