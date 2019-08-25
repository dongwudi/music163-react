import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './banner.scss';

class BannerCom extends PureComponent {
  render() {
    return (
      <div className="n-ban d-flag">
        <div className="wrap">
          <div className="ban f-pr">
            <a href="album?id=81061632" className="active d-flag">
              <img src="http://p1.music.126.net/Kv7xW5eBYjz6kACFieZHzw==/109951164319694496.jpg" alt=""/>
            </a>
            <span className="btnl click-flag f-alpha"></span>
            <span className="btnr click-flag f-alpha"></span>
            <div className="dots f-cb">
              <span className="pg click-flag pg-flag f-alpha"></span>
              <span className="pg click-flag pg-flag f-alpha"></span>
              <span className="pg click-flag pg-flag f-alpha"></span>
              <span className="pg click-flag pg-flag f-alpha"></span>
              <span className="pg click-flag pg-flag f-alpha active"></span>
            </div>
          </div>
          <div className="download f-pr">
            <Link to="/download" className="btn">下载客户端</Link>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="shadow"></span>
            <span className="shadowr"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerCom;