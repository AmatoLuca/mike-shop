import { useContext } from 'react';
import { ProfileContext } from '../Profile';
import { StyledNavigator } from './StyledNavigator';
import { Link } from 'react-router-dom';
import { TabOptionSelection } from '../models';

const Navigator = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('YourComponent must be used within a ProfileProvider');
  }
  return (
    <>
      {context && (
        <StyledNavigator>
          <Link
            to={''}
            onClick={() =>
              context.tabSelectionHandler(TabOptionSelection.SETTINGS)
            }
          >
            {TabOptionSelection.SETTINGS}
          </Link>
          <Link
            to={''}
            onClick={() =>
              context.tabSelectionHandler(TabOptionSelection.ORDERS)
            }
          >
            {TabOptionSelection.ORDERS}
          </Link>
        </StyledNavigator>
      )}
    </>
  );
};

export default Navigator;
