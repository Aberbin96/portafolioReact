import React from "react";
import Button from "../../../components/button";

const Tap = ({ localization, handler }) => {
  return (
    <div className="tap">
      <Button
        text={localization.about}
        handler={() => {
          handler("about");
        }}
        className={"tap__button"}
      />
      <Button
        text={localization.works}
        handler={() => {
          handler("portfolio");
        }}
        className={"tap__button"}
      />
      <Button
        text={localization.blog}
        handler={() => {
          handler("blog");
        }}
        className={"tap__button"}
      />
    </div>
  );
};

export default Tap;
