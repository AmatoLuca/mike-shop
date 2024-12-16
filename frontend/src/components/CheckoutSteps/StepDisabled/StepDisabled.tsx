import { StepDisabledProps } from '../models';
import { StyledStepDisabled } from './StyledStepDisabled';

const StepDisabled = ({ text }: StepDisabledProps) => {
  return <StyledStepDisabled>{text}</StyledStepDisabled>;
};

export default StepDisabled;
