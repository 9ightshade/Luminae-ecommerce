import React from "react";
import { TopMenuMobile } from "./Header";
import { Search } from "./Search";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
          <TopMenuMobile />{" "}
          <Search/>
            </header>

            <main>{children}</main>

            <footer>footer components go here</footer>
        </div>
    );
};

export default Layout;
