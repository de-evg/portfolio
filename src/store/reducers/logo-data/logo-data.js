/* eslint-disable default-case */
import { ActionType } from "../../action";

const initialState = {
  top: 0,
  left: -10,
};

const logoData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOGO_POSITION_TOP:
      return { ...state, top: action.payload };
    case ActionType.CHANGE_LOGO_POSITION_LEFT:
      return { ...state, left: action.payload };
  }

  return state;
};

export { logoData };
