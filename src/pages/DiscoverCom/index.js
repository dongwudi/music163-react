import React, { PureComponent } from "react";
import SubCom from "@/components/SubCom";
import BannerCom from "./BannerCom";
import RcmdCom from "./RcmdCom";
import NewCom from "./NewCom";
import BillCom from "./BillCom";
import MyInfo from "./MyInfo";
import SingerCom from "./SingerCom";
import "./index.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  set_banners,
  set_personallist,
  set_albumlist,
  set_billlist,
  set_singerlist
} from "./store/actionCreators";
import {
  SET_BILLUPLIST,
  SET_BILLNEWLIST,
  SET_BILLPERSLIST
} from "./store/constants";

class DiscoverCom extends PureComponent {
  render() {
    return (
      <>
        <SubCom />
        <BannerCom />
        <div className="g-bd1 f-cb">
          <div className="g-mn1">
            <div className="g-mn1c">
              <div className="g-wrap3">
                <RcmdCom />
                <NewCom />
                <BillCom />
              </div>
            </div>
          </div>
          <div className="g-sd1">
            <MyInfo />
            <SingerCom />
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    let {
      set_banners,
      set_personallist,
      set_albumlist,
      set_billlist,
      set_singerlist
    } = this.props;
    set_banners();
    set_personallist();
    set_albumlist();
    set_billlist(3, SET_BILLUPLIST);
    set_billlist(0, SET_BILLNEWLIST);
    set_billlist(2, SET_BILLPERSLIST);
    set_singerlist();
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      set_banners,
      set_personallist,
      set_albumlist,
      set_billlist,
      set_singerlist
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverCom);
