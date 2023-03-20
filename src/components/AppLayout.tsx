import React from "react";
import MobileNav from "./MobileNav";

const AppLayout = ({ children }: { children: any }) => {
  return (
    <div id="outer-container">
      <MobileNav
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      />
      <main id="page-wrap">{children}</main>
    </div>
  );
};

export default AppLayout;
