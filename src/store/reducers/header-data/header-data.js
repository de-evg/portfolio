/* eslint-disable default-case */
import {Section} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  currentSection: Section.LOGO,
  isMenuOpen: false
};

const headerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SECTION:
      return { ...state,  currentSection: action.payload }
    case ActionType.CHANGE_MAIN_MENU_VIEW:
      return { ...state,  isMenuOpen: !state.isMenuOpen }
  }

  return state;
};

export {headerData};
