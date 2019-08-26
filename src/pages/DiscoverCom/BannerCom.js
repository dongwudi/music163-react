import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./banner.scss";
import { connect } from "react-redux";

let timer = null;

class BannerCom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cur: 0
    };
  }
  render() {
    let { banners } = this.props;
    let { cur } = this.state;
    return (
      <div className="n-ban d-flag">
        <div className="wrap">
          {/* banner */}
          {banners && banners.length > 0 ? (
            <div className="ban f-pr">
              {banners.map((item, index) =>
                item.url ? (
                  <a
                    key={index.toString()}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cur === index ? "active d-flag" : "d-flag lev"}
                  >
                    <img src={`${item.imageUrl}`} alt="" />
                  </a>
                ) : (
                  <Link
                    key={index.toString()}
                    to={`/song?id=${item.encodeId}`}
                    className={cur === index ? "active d-flag" : "d-flag lev"}
                  >
                    <img src={`${item.imageUrl}`} alt="" />
                  </Link>
                )
              )}
              <span
                className="btnl click-flag f-alpha"
                onClick={() => {
                  this.setCur("pre");
                }}
              ></span>
              <span
                className="btnr click-flag f-alpha"
                onClick={() => {
                  this.setCur("nxt");
                }}
              ></span>
              <div className="dots f-cb">
                {Array(banners.length)
                  .fill()
                  .map((item, i) => (
                    <span
                      key={i.toString()}
                      className={[
                        "pg click-flag pg-flag f-alpha",
                        cur === i ? "active" : ""
                      ].join(" ")}
                      onClick={() => {
                        this.setCur(i);
                      }}
                    ></span>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  componentDidMount() {
    timer = setInterval(() => {
      if (!this.props.banners) return;
      this.setCur("nxt");
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  setCur(num) {
    clearInterval(timer);
    let len = this.props.banners.length || 0;
    let { cur } = this.state;
    if (typeof num === "number") {
      this.setState(
        {
          cur: num
        },
        this.upTimer
      );
    } else if (num === "pre") {
      cur = --cur < 0 ? len - 1 : cur;
      this.setState({ cur }, this.upTimer);
    } else {
      cur = ++cur > len - 1 ? 0 : cur;
      this.setState({ cur }, this.upTimer);
    }
  }
  upTimer() {
    timer = setInterval(() => {
      this.setCur("nxt");
    }, 4000);
  }
}

const mapStateToProps = state => ({
  banners: state.getIn(["discover", "banners"])
});

export default connect(mapStateToProps)(BannerCom);
