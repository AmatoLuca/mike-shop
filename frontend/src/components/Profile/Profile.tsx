import { createContext, useState, useCallback } from 'react';
import { StyledProfile } from './StyledProfile';
import Navigator from './Navigator/Navigator';
import Content from './Content/Content';
import { TabOptionSelection } from './models';

const Profile = ({ children }: { children: React.ReactNode }) => {
  const ProfileContext = createContext({});

  const [selectedTab, setSelectedTab] = useState<TabOptionSelection>(
    TabOptionSelection.SETTINGS
  );

  const tabSelectionHandler = useCallback((selection: TabOptionSelection) => {
    setSelectedTab(selection);
  }, []);

  return (
    <ProfileContext.Provider value={{ selectedTab, tabSelectionHandler }}>
      <StyledProfile>{children}</StyledProfile>
    </ProfileContext.Provider>
  );
};

Profile.Navigator = Navigator;
Profile.Content = Content;

export default Profile;
