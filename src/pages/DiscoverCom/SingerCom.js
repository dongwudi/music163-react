import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class SingerCom extends PureComponent {
  render() {
    return (
      <div className="n-singer">
        <h3 className="v-hd3">
          <span className="f-fl">入驻歌手</span>
          <Link to="/discover/artist/signed/" className="more s-fc3">
            查看全部 &gt;
          </Link>
        </h3>
        <ul className="n-enter f-cb">
          <li>
            <Link
              to="https://music.163.com/user/home?id=29879272"
              className="itm f-tdn"
            >
              <div className="head">
                <img
                  className="j-img"
                  src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
                  alt=""
                />
              </div>
              <div className="ifo">
                <h4>
                  <span className="nm f-fs1 f-ib f-thide">张惠妹aMEI</span>
                </h4>
                <p className="f-thide s-fc3">台湾歌手张惠妹</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="https://music.163.com/user/home?id=29879272"
              className="itm f-tdn"
            >
              <div className="head">
                <img
                  className="j-img"
                  src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
                  alt=""
                />
              </div>
              <div className="ifo">
                <h4>
                  <span className="nm f-fs1 f-ib f-thide">张惠妹aMEI</span>
                </h4>
                <p className="f-thide s-fc3">台湾歌手张惠妹</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="https://music.163.com/user/home?id=29879272"
              className="itm f-tdn"
            >
              <div className="head">
                <img
                  className="j-img"
                  src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
                  alt=""
                />
              </div>
              <div className="ifo">
                <h4>
                  <span className="nm f-fs1 f-ib f-thide">张惠妹aMEI</span>
                </h4>
                <p className="f-thide s-fc3">台湾歌手张惠妹</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SingerCom;
