import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

import { top } from "@/router/config";
import SearchCom from "./SearchCom";
import TopHeadLoginCom from "./TopHeadLoginCom";

const activeHandle = (match, location) => {
  if ((location.pathname === "/") | location.pathname.includes("discover")) {
    return true;
  }
};

class TopCom extends PureComponent {
  render() {
    return (
      <>
        <div className="m-top">
          <div className="wrap f-cb">
            <h1 className="logo">
              <a href="/#">网易云音乐</a>
            </h1>
            <ul className="m-nav">
              {top.map(item => (
                <li className="" key={item.name}>
                  <span>
                    {item.component ? (
                      <NavLink
                        exact
                        to={item.path}
                        isActive={item.path === "/" ? activeHandle : null}
                      >
                        <em>{item.name}</em>
                        <sub className="cor"></sub>
                      </NavLink>
                    ) : (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    )}
                    {item.icon ? <sup className={item.icon} /> : null}
                  </span>
                </li>
              ))}
            </ul>
            <TopHeadLoginCom />
            <a
              href="https://music.163.com/login?targetUrl=%2Fst/creator"
              target="_blank"
              rel="noopener noreferrer"
              className="m-topvd f-pr m-creator-center"
            >
              创作者中心
            </a>
            <SearchCom />
          </div>
        </div>
        <div className="m-subnav m-subnav-up f-pr j-tflag"></div>
      </>
    );
  }
}

export default TopCom;
