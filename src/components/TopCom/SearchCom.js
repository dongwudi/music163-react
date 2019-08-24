import React, { PureComponent } from "react";

class SearchCom extends PureComponent {
  state = {
    value: ''
  }
  render() {
    let {value} = this.state
    return (
      <div className="m-srch f-pr j-suggest m-srch-fcs">
        <div className="srchbg">
          <span className="parent">
            <input
              type="text"
              name="srch"
              id="srch"
              className="txt j-flag"
              value = {value}
              onChange = {this.onChange}
            />
            <label className="ph j-flag">音乐/视频/电台/用户</label>
          </span>
        </div>
      </div>
    );
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
}

export default SearchCom;
