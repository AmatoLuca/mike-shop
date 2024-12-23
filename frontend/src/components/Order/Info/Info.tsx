import { StyledInfo } from './StyledInfo';
import { InfoProps } from '../models';

const Info = ({ text, color }: InfoProps) => {
  return <StyledInfo $color={color}>{text}</StyledInfo>;
};

export default Info;
