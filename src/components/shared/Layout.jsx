import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>header components go here</header>

      <main>{children}</main>

      <footer>footer components go here</footer>
    </div>
  );
};

export default Layout;
