import React from "react";
import SubCom from "@/components/SubCom";
import BannerCom from "./BannerCom";
import RcmdCom from "./RcmdCom";
import NewCom from "./NewCom";
import "./index.scss";

export default () => {
  return (
    <>
      <SubCom />
      <BannerCom />
      <div className="g-bd1 f-cb">
        <div className="g-mn1">
          <div className="g-mn1c">
            <div className="g-wrap3">
              <RcmdCom />
              <NewCom />
            </div>
          </div>
        </div>
        <div className="g-sd1"></div>
      </div>
    </>
  );
};
