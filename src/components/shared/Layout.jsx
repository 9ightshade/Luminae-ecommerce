import React from "react";
import { TopMenu } from "./TopMenu";
import { Search } from "./Search";
import { Nav } from "./Nav";
import { RouterHeader } from "./Header";
import { Footer, PaymentLink } from "./Footer";
import { Categories } from "./Categories";
import { useState } from "react";

const Layout = ({ children }) => {
    const [mobileNavDisplay, setmobileNavDisplay] = useState(false);
    return (
        <div>
            <header className="md:flex justify-around items-center p-6 ">
                {mobileNavDisplay ? (
                    <div className="md:hidden" >
                         <Categories
                        mobileNavDisplay={mobileNavDisplay}
                        setmobileNavDisplay={setmobileNavDisplay}
                    />
                   </div>
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
