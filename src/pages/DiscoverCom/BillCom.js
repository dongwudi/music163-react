import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class BillCom extends PureComponent {
  render() {
    return (
      <div className="n-bill">
        <div className="v-hd2">
          <Link to="/discover/album/" className="tit f-ff2 f-tdn">
            榜单
          </Link>
          <span className="more">
            <Link to="/discover/album/" className="s-fc3">
              更多
            </Link>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-blist">
          <dl className="blk">
            <dt className="top">
              <div className="cver u-cover u-cover-4">
                <img
                  className="j-img"
                  src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                  alt=""
                />
                <Link
                  to="/discover/toplist?id=19723756"
                  className="msk"
                  title="云音乐飙升榜"
                ></Link>
              </div>
              <div className="tit">
                <Link to="/discover/toplist?id=19723756" title="云音乐飙升榜">
                  <h3 className="f-fs1 f-thide">云音乐飙升榜</h3>
                </Link>
                <div className="btn">
                  <i className="s-bg s-bg-9 f-tdn">播放</i>
                  <i className="s-bg s-bg-10 f-tdn subscribe-flag">收藏</i>
                </div>
              </div>
            </dt>
            <dd>
              <ol>
                <li className="js-dis">
                  <span className="no no-top">1</span>
                  <Link
                    to="/song?id=1386079916"
                    className="nm s-fc0 f-thide"
                    title="心跳 (Live)"
                  >
                    心跳 (Live)
                  </Link>
                </li>
                <li className="js-dis">
                  <span className="no">1</span>
                  <Link
                    to="/song?id=1386079916"
                    className="nm s-fc0 f-thide"
                    title="心跳 (Live)"
                  >
                    心跳 (Live)
                  </Link>
                </li>
              </ol>
              <div className="more">
                <Link to="/discover/toplist?id=19723756" className="s-fc0">
                  查看全部&gt;
                </Link>
              </div>
            </dd>
          </dl>
          <dl className="blk">
            <dt className="top">
              <div className="cver u-cover u-cover-4">
                <img
                  className="j-img"
                  src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                  alt=""
                />
                <Link
                  to="/discover/toplist?id=19723756"
                  className="msk"
                  title="云音乐飙升榜"
                ></Link>
              </div>
              <div className="tit">
                <Link to="/discover/toplist?id=19723756" title="云音乐飙升榜">
                  <h3 className="f-fs1 f-thide">云音乐飙升榜</h3>
                </Link>
                <div className="btn">
                  <i className="s-bg s-bg-9 f-tdn">播放</i>
                  <i className="s-bg s-bg-10 f-tdn subscribe-flag">收藏</i>
                </div>
              </div>
            </dt>
            <dd>
              <ol>
                <li className="js-dis">
                  <span className="no no-top">1</span>
                  <Link
                    to="/song?id=1386079916"
                    className="nm s-fc0 f-thide"
                    title="心跳 (Live)"
                  >
                    心跳 (Live)
                  </Link>
                </li>
                <li className="js-dis">
                  <span className="no">1</span>
                  <Link
                    to="/song?id=1386079916"
                    className="nm s-fc0 f-thide"
                    title="心跳 (Live)"
                  >
                    心跳 (Live)
                  </Link>
                </li>
              </ol>
              <div className="more">
                <Link to="/discover/toplist?id=19723756" className="s-fc0">
                  查看全部&gt;
                </Link>
              </div>
            </dd>
          </dl>
          <dl className="blk blk-1">
            <dt className="top">
              <div className="cver u-cover u-cover-4">
                <img
                  className="j-img"
                  src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                  alt=""
                />
                <Link
                  to="/discover/toplist?id=19723756"
                  className="msk"
                  title="云音乐飙升榜"
                ></Link>
              </div>
              <div className="tit">
                <Link to="/discover/toplist?id=19723756" title="云音乐飙升榜">
                  <h3 className="f-fs1 f-thide">云音乐飙升榜</h3>
                </Link>
                <div className="btn">
                  <i className="s-bg s-bg-9 f-tdn">播放</i>
                  <i className="s-bg s-bg-10 f-tdn subscribe-flag">收藏</i>
                </div>
              </div>
            </dt>
            <dd>
              <ol>
                <li className="js-dis">
                  <span className="no no-top">1</span>
                  <Link
                    to="/song?id=1386079916"
                    className="nm s-fc0 f-thide"
                    title="心跳 (Live)"
                  >
                    心跳 (Live)
                  </Link>
                </li>
                <li className="js-dis">
                  <span className="no">1</span>
                  <Link
                    to="/song?id=1386079916"
                    className="nm s-fc0 f-thide"
                    title="心跳 (Live)"
                  >
                    心跳 (Live)
                  </Link>
                </li>
              </ol>
              <div className="more">
                <Link to="/discover/toplist?id=19723756" className="s-fc0">
                  查看全部&gt;
                </Link>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default BillCom;
