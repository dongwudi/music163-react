import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const BillSubCom = ({ playlist }) =>
  playlist ? (
    <>
      <dt className="top">
        <div className="cver u-cover u-cover-4">
          <img className="j-img" src={playlist.coverImgUrl} alt="" />
          <Link
            to={`/discover/toplist?id=${playlist.id}`}
            className="msk"
            title={playlist.name}
          ></Link>
        </div>
        <div className="tit">
          <Link
            to={`/discover/toplist?id=${playlist.id}`}
            title={playlist.name}
          >
            <h3 className="f-fs1 f-thide">{playlist.name}</h3>
          </Link>
          <div className="btn">
            <i className="s-bg s-bg-9 f-tdn">播放</i>
            <i className="s-bg s-bg-10 f-tdn subscribe-flag">收藏</i>
          </div>
        </div>
      </dt>
      <dd>
        <ol>
          {playlist.tracks.slice(0, 10).map((item, i) => (
            <li className="js-dis" key={item.id}>
              <span className="no no-top">{i + 1}</span>
              <Link
                to={`/song?id=${item.id}`}
                className="nm s-fc0 f-thide"
                title={item.name}
                style={{ color: "#000" }}
              >
                {item.name}
              </Link>
              <div className="oper">
                <i className="s-bg s-bg-11" title="播放"></i>
                <i className="u-icn u-icn-81" title="添加到播放列表"></i>
                <i className="s-bg s-bg-12" title="收藏"></i>
              </div>
            </li>
          ))}
        </ol>
        <div className="more">
          <Link to={`/discover/toplist?id=${playlist.id}`} className="s-fc0">
            查看全部&gt;
          </Link>
        </div>
      </dd>
    </>
  ) : null;

class BillCom extends PureComponent {
  render() {
    let { billUplist, billNewlist, billPerslist } = this.props;
    return (
      <div className="n-bill">
        <div className="v-hd2">
          <Link to="/discover/toplist" className="tit f-ff2 f-tdn">
            榜单
          </Link>
          <span className="more">
            <Link to="/discover/toplist" className="s-fc3">
              更多
            </Link>
            <i className="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div className="n-blist">
          <dl className="blk">
            <BillSubCom playlist={billUplist} />
          </dl>
          <dl className="blk">
            <BillSubCom playlist={billNewlist} />
          </dl>
          <dl className="blk blk-1">
            <BillSubCom playlist={billPerslist} />
          </dl>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  billUplist: state.getIn(["discover", "billUplist"]),
  billNewlist: state.getIn(["discover", "billNewlist"]),
  billPerslist: state.getIn(["discover", "billPerslist"])
});

export default connect(mapStateToProps)(BillCom);
