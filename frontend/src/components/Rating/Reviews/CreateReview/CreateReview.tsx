import { useCallback, useState } from 'react';
import { StyledCreateReview } from './StyledCreateReview';

const CreateReview = () => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);

  const clickHanlder = useCallback(() => {
    setIsReviewOpened((prev) => !prev);
  }, []);

  return (
    <StyledCreateReview>
      <div className="review-create" onClick={clickHanlder}>
        <span className="review-create_action-title">Write a review</span>
      </div>
    </StyledCreateReview>
  );
};

export default CreateReview;
