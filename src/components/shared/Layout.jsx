import React from "react";
import { TopMenu } from "./TopMenu";
import { Search } from "./Search";
import { Nav } from "./Nav";
import { RouterHeader } from "./RouterHeader";
import { Footer, PaymentLink } from "./RouterFooter";
import { Categories } from "./Categories";
import { useState } from "react";

const Layout = ({ children }) => {
    const [mobileNavDisplay, setmobileNavDisplay] = useState(false);
    return (
        <div>
            <header className="md:flex justify-around items-center p-6 ">
                {mobileNavDisplay ? (
                    <Categories
                        mobileNavDisplay={mobileNavDisplay}
                        setmobileNavDisplay={setmobileNavDisplay}
                    />
                ) : (
                    <div className="md:flex ">
                        {" "}
                        <TopMenu
                            mobileNavDisplay={mobileNavDisplay}
                            setmobileNavDisplay={setmobileNavDisplay}
                        />{" "}
                        <Search />
                    </div>
                )}
            </header>
            <Nav />
            <RouterHeader />
            <div className="hidden md:block">
                <Categories />
            </div>

            <main>{children}</main>

            <footer>
                <Footer />
                <PaymentLink />
            </footer>
        </div>
    );
};

export default Layout;
