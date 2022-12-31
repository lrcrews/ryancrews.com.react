import { ReactNode, useContext } from "react";

import { SiteFooter, SiteHeader } from "./";
import { ThemeContext } from "../themes";

import "./PageWrapper.scss";
import ScrollToTop from "../scrollToTop";

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  const { themeName } = useContext(ThemeContext);

  return (
    <div className={`theme-${themeName}`}>
      <div className="page-wrapper">
        <ScrollToTop />
        <SiteHeader />
        <div className="content">{children}</div>
        <SiteFooter />
      </div>
    </div>
  );
}

export default PageWrapper;
