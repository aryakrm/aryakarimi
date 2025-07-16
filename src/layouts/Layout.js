import { Fragment, useEffect } from "react";
import {
  activeAnimation,
  initCursor,
  jarallaxAnimation,
  stickyNav,
} from "../utils";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageClassName }) => {
  useEffect(() => {
    activeAnimation();
    initCursor();
    window.addEventListener("scroll", activeAnimation);
    window.addEventListener("scroll", stickyNav);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
    jarallaxAnimation();
    document.querySelector("body").className = pageClassName
      ? pageClassName
      : "";
  });

  return (
    <Fragment>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WN6732R"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <div className="container-page">
        <Header />
        {/* Wrapper */}
        <div className="wrapper">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
      {/* cursor */}
      <div className="cursor" />
    </Fragment>
  );
};
export default Layout;
