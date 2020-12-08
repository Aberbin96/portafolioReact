import React from "react";

function Main({ page, children }) {
  return <main className={page}>{children}</main>;
}

export default Main;
