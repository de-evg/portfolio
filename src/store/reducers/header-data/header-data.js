/* eslint-disable default-case */
import {Section} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  currentSection: Section.LOGO,
};

const headerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SECTION:
      return { ...state,  currentSection: action.payload }

  }

  return state;
};

export {headerData};
