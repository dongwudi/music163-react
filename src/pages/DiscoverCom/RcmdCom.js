import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changCount } from "@/util";

const RcmdCom = ({ personalList }) => (
  <div className="n-rcmd">
    <div className="v-hd2">
      <Link to="/discover/playlist/" className="tit f-ff2 f-tdn">
        热门推荐
      </Link>
      <div className="tab">
        <Link to="/discover/playlist/?cat=华语" className="s-fc3">
          华语
        </Link>
        <span className="line">|</span>
        <Link to="/discover/playlist/?cat=流行" className="s-fc3">
          流行
        </Link>
        <span className="line">|</span>
        <Link to="/discover/playlist/?cat=摇滚" className="s-fc3">
          摇滚
        </Link>
        <span className="line">|</span>
        <Link to="/discover/playlist/?cat=民谣" className="s-fc3">
          民谣
        </Link>
        <span className="line">|</span>
        <Link to="/discover/playlist/?cat=电子" className="s-fc3">
          电子
        </Link>
      </div>
      <span className="more">
        <Link to="/discover/playlist/" className="s-fc3">
          更多
        </Link>
        <i className="cor s-bg s-bg-6">&nbsp;</i>
      </span>
    </div>
    <ul className="m-cvrlst f-cb">
      {personalList
        ? personalList.map(item => (
            <li key={item.id}>
              <div className="u-cover u-cover-1">
                <img src={item.picUrl} alt="" />
                <Link to={`/playlist/?id=${item.id}`} className="msk"></Link>
                <div className="bottom">
                  <i className="icon-play f-fr"></i>
                  <span className="icon-headset"></span>
                  <span className="nb">{changCount(item.playCount)}</span>
                </div>
              </div>
              <p className="dec">
                <Link to={`/playlist/?id=${item.id}`} className="tit s-fc0">
                  {item.name}
                </Link>
              </p>
            </li>
          ))
        : null}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  personalList: state.getIn(["discover", "personalList"])
});

export default connect(mapStateToProps)(RcmdCom);
