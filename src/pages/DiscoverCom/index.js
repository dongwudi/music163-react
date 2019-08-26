import React, { PureComponent } from "react";
import SubCom from "@/components/SubCom";
import BannerCom from "./BannerCom";
import RcmdCom from "./RcmdCom";
import NewCom from "./NewCom";
import BillCom from "./BillCom";
import MyInfo from "./MyInfo";
import SingerCom from "./SingerCom";
import DjCom from "./DjCom";
import "./index.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { set_banners } from "./store/actionCreators";

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
            <DjCom />
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    let { set_banners } = this.props;
    set_banners();
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ set_banners }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverCom);
