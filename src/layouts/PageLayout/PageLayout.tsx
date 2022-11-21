import React, { FC } from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import style from "./PageLayout.module.scss";

interface IProps {
  children: React.ReactNode;
}

const PageLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.section_wrapper}>
        <Header />
        <div className={style.content_wrapper}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
