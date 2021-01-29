const ActionType = {
  CHANGE_SECTION: `CHANGE_SECTION`,
  CHANGE_MAIN_MENU_VIEW: `CHANGE_MAIN_MENU_VIEW`
};

const ActionCreator = {  
  changeSection: (section) => ({
    type: ActionType.CHANGE_SECTION,
    payload: section
  }),
  changeMainMenu: () => ({
    type: ActionType.CHANGE_MAIN_MENU_VIEW
  })
};

export {ActionType, ActionCreator};
