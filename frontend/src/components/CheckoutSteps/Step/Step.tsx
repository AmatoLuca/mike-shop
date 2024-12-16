import { StyledStep } from './StyledStep';
import { StepProps } from '../models';
import { Link } from 'react-router-dom';

const Step = ({ textLink, url }: StepProps) => {
  return (
    <StyledStep>
      <Link to={url}>{textLink}</Link>
    </StyledStep>
  );
};

export default Step;
