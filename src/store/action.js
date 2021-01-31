const ActionType = {
  CHANGE_SECTION: `CHANGE_SECTION`,
  CHANGE_MAIN_MENU_VIEW: `CHANGE_MAIN_MENU_VIEW`,
  CHANGE_LOGO_POSITION: `CHANGE_LOGO_POSITION`
};

const ActionCreator = {  
  changeSection: (section) => ({
    type: ActionType.CHANGE_SECTION,
    payload: section
  }),
  changeMainMenu: () => ({
    type: ActionType.CHANGE_MAIN_MENU_VIEW
  }),
  changeLogoPosition: (coord) => ({
    type: `CHANGE_LOGO_POSITION`,
    payload: coord
  })
};

export {ActionType, ActionCreator};
