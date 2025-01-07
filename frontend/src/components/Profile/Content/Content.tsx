import { useContext, useMemo } from 'react';
import { ProfileContext } from '../Profile';
import { TabOptionSelection } from '../models';
import Account from '../Account/Account';
import Orders from '../Orders/Orders';

const Content = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('YourComponent must be used within a ProfileProvider');
  }

  const profileContentToDisplay = useMemo(() => {
    switch (context?.selectedTab) {
      case TabOptionSelection.SETTINGS: {
        return <Account />;
      }

      case TabOptionSelection.ORDERS: {
        return <Orders />;
      }

      default:
        return;
    }
  }, [context?.selectedTab]);

  return <>{context && profileContentToDisplay}</>;
};

export default Content;
