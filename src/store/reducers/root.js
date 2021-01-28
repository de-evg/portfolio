import {combineReducers} from "redux";
import {headerData} from "./header-data/header-data";
const NameSpace = {
  HEADER: `HEADER`,  
};

export {NameSpace};
export default combineReducers({
  [NameSpace.HEADER]: headerData
});
