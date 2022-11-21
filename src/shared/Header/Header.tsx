import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.page_header}>
      <div className={style.container}>
        <div className={style.header_menu}>
          <div className={style.sticker_logo}>Галерея</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
