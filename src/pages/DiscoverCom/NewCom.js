import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { chunk } from "@/util";

const NewCom = ({ albumList }) => {
  let list = chunk(albumList, 5);
  let len = list.length;
  const [offset, setOffset] = useState(0);

  const prev = () => {
    let cur = offset + 1;
    if (cur > 0) {
      return;
    } else {
      setOffset(cur);
    }
  };
  const nxt = () => {
    let cur = offset - 1;
    if (cur < -(len - 1)) {
      return;
    } else {
      setOffset(cur);
    }
  };

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
          <i className="click-flag pre s-bg s-bg-7 f-tdn" onClick={prev}>
            &nbsp;
          </i>
          <div className="roll f-pr">
            <div
              className="roll-w"
              style={{ transform: `translateX(${offset * 100}%)` }}
            >
              {list.map((ull, i) => (
                <ul
                  className="f-cb roller-flag"
                  key={i.toString()}
                  style={{ transform: `translateX(${i * 100}%)` }}
                >
                  {ull.map(lli => (
                    <li key={lli.id}>
                      <div className="u-cover u-cover-alb1">
                        <img src={lli.picUrl} alt="" />
                        <Link to={`/album?${lli.id}`} className="msk"></Link>
                        <Link
                          to={`/album?${lli.id}`}
                          className="icon-play f-alpha f-fr"
                        ></Link>
                      </div>
                      <p className="f-thide">
                        <Link to={`/album?${lli.id}`} className="s-fc0 tit">
                          {lli.name}
                        </Link>
                      </p>
                      <p className="tit f-thide">
                        <Link to={`/album?${lli.id}`} className="s-fc3">
                          {lli.artist.name}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <i className="click-flag nxt s-bg s-bg-8 f-tdn" onClick={nxt}>
            &nbsp;
          </i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  albumList: state.getIn(["discover", "albumList"])
});

export default connect(mapStateToProps)(NewCom);
