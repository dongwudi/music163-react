import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class NewCom extends PureComponent {
  render() {
    return (
      <div className="n-new">
        <div className="v-hd2">
          <Link to="/discover/album/" className="tit f-ff2 f-tdn">
            新碟上架
          </Link>
          <span className="more">
            <Link to="/discover/album/" className="s-fc3">
              更多
            </Link>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-disk">
          <div className="inner">
            <i className="click-flag pre s-bg s-bg-7 f-tdn">&nbsp;</i>
            <div className="roll f-pr">
              <ul className="f-cb roller-flag">
                <li>
                  <div className="u-cover u-cover-alb1">
                    <img
                      src="http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100"
                      alt=""
                    />
                    <Link to="/album" className="msk"></Link>
                    <Link to="/album" className="icon-play f-alpha f-fr"></Link>
                  </div>
                  <p className="f-thide">
                    <Link to="/album" className="s-fc0 tit">
                      Lover
                    </Link>
                  </p>
                  <p className="tit f-thide">
                    <Link to="/album" className="s-fc3">
                      Taylor Swift
                    </Link>
                  </p>
                </li>
                <li>
                  <div className="u-cover u-cover-alb1">
                    <img
                      src="http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100"
                      alt=""
                    />
                    <Link to="/album" className="msk"></Link>
                    <Link to="/album" className="icon-play f-alpha f-fr"></Link>
                  </div>
                  <p className="f-thide">
                    <Link to="/album" className="s-fc0 tit">
                      Lover
                    </Link>
                  </p>
                  <p className="tit f-thide">
                    <Link to="/album" className="s-fc3">
                      Taylor Swift
                    </Link>
                  </p>
                </li>
                <li>
                  <div className="u-cover u-cover-alb1">
                    <img
                      src="http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100"
                      alt=""
                    />
                    <Link to="/album" className="msk"></Link>
                    <Link to="/album" className="icon-play f-alpha f-fr"></Link>
                  </div>
                  <p className="f-thide">
                    <Link to="/album" className="s-fc0 tit">
                      Lover
                    </Link>
                  </p>
                  <p className="tit f-thide">
                    <Link to="/album" className="s-fc3">
                      Taylor Swift
                    </Link>
                  </p>
                </li>
                <li>
                  <div className="u-cover u-cover-alb1">
                    <img
                      src="http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100"
                      alt=""
                    />
                    <Link to="/album" className="msk"></Link>
                    <Link to="/album" className="icon-play f-alpha f-fr"></Link>
                  </div>
                  <p className="f-thide">
                    <Link to="/album" className="s-fc0 tit">
                      Lover
                    </Link>
                  </p>
                  <p className="tit f-thide">
                    <Link to="/album" className="s-fc3">
                      Taylor Swift
                    </Link>
                  </p>
                </li>
                <li>
                  <div className="u-cover u-cover-alb1">
                    <img
                      src="http://p3.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=100y100"
                      alt=""
                    />
                    <Link to="/album" className="msk"></Link>
                    <Link to="/album" className="icon-play f-alpha f-fr"></Link>
                  </div>
                  <p className="f-thide">
                    <Link to="/album" className="s-fc0 tit">
                      Lover
                    </Link>
                  </p>
                  <p className="tit f-thide">
                    <Link to="/album" className="s-fc3">
                      Taylor Swift
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            <i className="click-flag nxt s-bg s-bg-8 f-tdn">&nbsp;</i>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCom;
