import React, { PureComponent } from "react";

class TopHeadLoginCom extends PureComponent {
  render() {
    return (
      <div className="m-tophead f-pr j-tflag">
        <div role="menuitem" className="link s-fc3" onClick={this.showLogin}>
          登录
        </div>
      </div>
    );
  }
  showLogin = () => {
    console.log("login");
  };
}

export default TopHeadLoginCom;
