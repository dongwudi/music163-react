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
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewCom;
