const ActionType = {
  CHANGE_SECTION: `CHANGE_SECTION`
};

const ActionCreator = {  
  changeSection: (section) => ({
    type: ActionType.CHANGE_SECTION,
    payload: section
  })
};

export {ActionType, ActionCreator};
