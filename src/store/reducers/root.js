import {combineReducers} from "redux";
import {headerData} from "./header-data/header-data";
import {logoData} from "./logo-data/logo-data";
const NameSpace = {
  HEADER: `HEADER`,
  LOGO: `LOGO`
};

export {NameSpace};
export default combineReducers({
  [NameSpace.HEADER]: headerData,
  [NameSpace.LOGO]: logoData
});
