import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

import { subs } from "@/router/config";

const activeHandle = (match, location) => {
  if ((location.pathname === "/") | (location.pathname === "/discover")) {
    return true;
  }
};

class SubCom extends PureComponent {
  render() {
    return (
      <div className="m-subnav j-tflag">
        <div className="wrap f-pr">
          <ul className="nav">
            {subs.map(item => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  exact
                  isActive={item.path === "/discover" ? activeHandle : null}
                >
                  <em>
                    {item.name}
                    {item.icon ? (
                      <span className="f-pa f-r-white-icon"></span>
                    ) : null}
                  </em>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubCom;
