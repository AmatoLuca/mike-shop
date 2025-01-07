import { StyledNavigator } from './StyledNavigator';
import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <StyledNavigator>
      <Link to={''}>{'Settings'}</Link>
      <Link to={''}>{'Orders'}</Link>
    </StyledNavigator>
  );
};

export default Navigator;
