import { StyledMain } from '../Main/StyledMain';
import { MainComponentProps } from './models/index';

const Main = ({ children }: MainComponentProps) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
