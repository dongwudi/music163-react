import React, { PureComponent } from "react";
import "./index.scss";

class BackTop extends PureComponent {
  render() {
    return (
      <span className="m-back" onClick={this.handleScrollTop}>
        回到顶部
      </span>
    );
  }
  handleScrollTop() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }
}

export default BackTop;
