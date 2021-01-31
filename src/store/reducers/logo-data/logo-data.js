/* eslint-disable default-case */
import {ActionType} from "../../action";

const initialState = {
  top: ``,
  left: ``
};

const logoData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOGO_POSITION:
      return { ...state,  top: action.payload.top, left: action.payload.left }
  }

  return state;
};

export {logoData};
