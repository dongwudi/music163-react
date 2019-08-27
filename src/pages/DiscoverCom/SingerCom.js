import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SingerCom = ({ singerlist }) => (
  <div className="n-singer">
    <h3 className="v-hd3">
      <span className="f-fl">入驻歌手</span>
      <Link to="/discover/artist/signed/" className="more s-fc3">
        查看全部 &gt;
      </Link>
    </h3>
    <ul className="n-enter f-cb">
      {singerlist
        ? singerlist.map(item => (
            <li key={item.accountId}>
              <Link
                to={`/user/home?id=${item.accountId}`}
                className="itm f-tdn"
              >
                <div className="head">
                  <img className="j-img" src={item.picUrl} alt="" />
                </div>
                <div className="ifo">
                  <h4>
                    <span className="nm f-fs1 f-ib f-thide">{item.name}</span>
                  </h4>
                  <p className="f-thide s-fc3">{item.name}</p>
                </div>
              </Link>
            </li>
          ))
        : null}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  singerlist: state.getIn(["discover", "singerlist"])
});

export default connect(mapStateToProps)(SingerCom);
