export enum TabOptionSelection {
  SETTINGS = 'Settings',
  ORDERS = 'Orders',
}

export type ProfileContextType = {
  selectedTab: TabOptionSelection;
  tabSelectionHandler: (selection: TabOptionSelection) => void;
};
