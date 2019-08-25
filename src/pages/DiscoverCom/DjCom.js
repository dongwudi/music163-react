import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class DjCom extends PureComponent {
  render() {
    return (
      <div className="n-dj n-dj-1">
        <h3 className="v-hd3">热门主播</h3>
        <ul className="n-hotdj f-cb">
          <li>
            <Link to="https://music.163.com/user/home?id=278438485" className="cver">
              <img
                className="j-img"
                src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
                alt=""
              />
            </Link>
            <div className="info">
              <p>
                <Link to="/user/home?id=278438485" className="nm-icn f-thide s-fc0">
                  陈立
                </Link>{" "}
                <sup className="u-icn u-icn-1 "></sup>
              </p>
              <p className="f-thide s-fc3">心理学家、美食家陈立教授</p>
            </div>
          </li>
          <li>
            <Link to="https://music.163.com/user/home?id=278438485" className="cver">
              <img
                className="j-img"
                src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
                alt=""
              />
            </Link>
            <div className="info">
              <p>
                <Link to="/user/home?id=278438485" className="nm-icn f-thide s-fc0">
                  陈立
                </Link>{" "}
                <sup className="u-icn u-icn-1 "></sup>
              </p>
              <p className="f-thide s-fc3">心理学家、美食家陈立教授</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default DjCom;
