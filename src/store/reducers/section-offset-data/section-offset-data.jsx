/* eslint-disable default-case */
import { ActionType } from "../../action";

const initialState = {
  LOGO: 0,
  ABOUT_ME: 0,
  SERVICES: 0,
  WORKS: 0,
  CONTACTS: 0
};

const sectionOffsetData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFSET:
      return { ...state, ...action.payload  };
  }

  return state;
};

export { sectionOffsetData };
