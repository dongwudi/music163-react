import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class RcmdCom extends PureComponent {
  render() {
    return (
      <div className="n-rcmd">
        <div className="v-hd2">
          <Link to="/discover/playlist/" className="tit f-ff2 f-tdn">
            热门推荐
          </Link>
          <div className="tab">
            <Link to="/discover/playlist/" className="s-fc3">
              华语
            </Link>
            <span className="line">|</span>
            <Link to="/discover/playlist/" className="s-fc3">
              流行
            </Link>
            <span className="line">|</span>
            <Link to="/discover/playlist/" className="s-fc3">
              摇滚
            </Link>
            <span className="line">|</span>
            <Link to="/discover/playlist/" className="s-fc3">
              民谣
            </Link>
            <span className="line">|</span>
            <Link to="/discover/playlist/" className="s-fc3">
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <li key={item}>
              <div className="u-cover u-cover-1">
                <img
                  src="http://p2.music.126.net/gLdhdHWTEtN74YUIEC6TkA==/109951164316498631.jpg?param=140y140"
                  alt=""
                />
                <Link to="/playlist?id=2951999252" className="msk"></Link>
                <div className="bottom">
                  <i className="icon-play f-fr"></i>
                  <span className="icon-headset"></span>
                  <span className="nb">142万</span>
                </div>
              </div>
              <p className="dec">
                <Link to="/playlist?id=2951999252" className="tit s-fc0">
                  如果感觉生活艰难，就请你听完这一首歌
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RcmdCom;
