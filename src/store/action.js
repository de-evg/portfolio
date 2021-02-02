const ActionType = {
  CHANGE_SECTION: `CHANGE_SECTION`,
  CHANGE_MAIN_MENU_VIEW: `CHANGE_MAIN_MENU_VIEW`,
  CHANGE_LOGO_POSITION_TOP: `CHANGE_LOGO_POSITION_TOP`,
  CHANGE_LOGO_POSITION_LEFT: `CHANGE_LOGO_POSITION_LEFT`
};

const ActionCreator = {  
  changeSection: (section) => ({
    type: ActionType.CHANGE_SECTION,
    payload: section
  }),
  changeMainMenu: () => ({
    type: ActionType.CHANGE_MAIN_MENU_VIEW
  }),
  changeLogoPositionTop: (top) => ({
    type: ActionType.CHANGE_LOGO_POSITION_TOP,
    payload: top
  }),
  changeLogoPositionLeft: (left) => ({
    type: ActionType.CHANGE_LOGO_POSITION_LEFT,
    payload: left
  })
};

export {ActionType, ActionCreator};
