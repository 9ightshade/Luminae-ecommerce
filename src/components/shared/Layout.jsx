import React from "react";
import { TopMenu } from "./TopMenu";
import { Search } from "./Search";
import { Nav } from "./Nav";
import { RouterHeader } from "./RouterHeader";
import { Footer, PaymentLink } from "./RouterFooter";

const Layout = ({ children }) => {
    return (
        <div>
            <header className="md:flex justify-around items-center p-6 ">
                <TopMenu /> <Search />
            </header>
            <Nav />
            <RouterHeader />
            <main>{children}</main>

            <footer>
                <Footer />
                <PaymentLink />
            </footer>
        </div>
    );
};

export default Layout;
