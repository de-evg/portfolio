import {combineReducers} from "redux";
import sectionList from "../../components/section-list/section-list";
import {headerData} from "./header-data/header-data";
import {logoData} from "./logo-data/logo-data";
import {sectionOffsetData} from "./section-offset-data/section-offset-data";
const NameSpace = {
  HEADER: `HEADER`,
  LOGO: `LOGO`,
  OFFSET: `OFFSET`
};

export {NameSpace};
export default combineReducers({
  [NameSpace.HEADER]: headerData,
  [NameSpace.LOGO]: logoData,
  [NameSpace.OFFSET]: sectionOffsetData
});
