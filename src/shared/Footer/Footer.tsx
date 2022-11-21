import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.page_footer}>
      <div className={style.container}>
        <div className={style.footer_menu}>
          <div className={style.footer_left}>
            <div className={style.sticker_logo}>Нижний Новгород</div>
            <div className={style.footer_text}>2022г.</div>
          </div>
          <div className={(style.footer_rigth, style.footer_text)}>
            Галерея изображений
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
