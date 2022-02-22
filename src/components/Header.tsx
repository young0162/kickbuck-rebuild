import React from "react";
import { Menu } from "@mui/icons-material";
import "../assets/scss/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__top">
          <div className="header__top-nav">
            <span>로그인</span>
            <span>회원가입</span>
          </div>
        </div>
      </div>
      <div className="header__inner">
        <div className="header__bottom">
          <div></div>
          <div className="header__bottom-logo">KICK BUCK</div>
          <div className="header__bottom-menuBtn">
            <Menu sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
