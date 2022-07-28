import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const handleClick = (e) => {
    if(e.target.className==="header-item"){
    let currentActice = document.querySelector(".header-active");
    currentActice.classList.remove("header-active");
    e.target.classList.add("header-active");
    }
  };

  return (
    <div className="header container">
      <Link to="/">
        <div className="header-left">
          <img src={logo} alt="" />
          <span>Saigon Opera House</span>
        </div>
      </Link>
      <div className="header-center" onClick={(e) => handleClick(e)}>
        <Link to="/" title="Home" className="header-item header-active">
          Home
        </Link>
        <Link to="/" title="Shows" className="header-item">
          Shows
        </Link>
        <Link to="/" title="News" className="header-item">
          News
        </Link>
        <Link to="/" title="About us" className="header-item">
          About us
        </Link>
        <Link to="/" title="Contact" className="header-item">
          Contact
        </Link>
      </div>
      <div className="header-right">
        <div className="header-right-search">
          <input type="text" required />
          <span>Tìm kiếm</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.78074 8.98266H9.86267L13.4347 12.5547C13.4347 12.5547 13.4347 12.5547 13.4347 12.5547C13.5514 12.6715 13.6169 12.8298 13.6168 12.9949C13.6168 13.16 13.5511 13.3183 13.4344 13.435C13.3176 13.5517 13.1592 13.6172 12.9942 13.6171C12.8291 13.6171 12.6708 13.5514 12.5541 13.4346L12.5541 13.4346L8.9674 9.84797L8.93626 9.81682L8.90143 9.8438C7.83929 10.6665 6.50364 11.0536 5.1662 10.9265C3.82875 10.7993 2.58998 10.1674 1.70189 9.15935C0.813792 8.15128 0.343086 6.84274 0.385525 5.49994C0.427964 4.15713 0.980361 2.88093 1.93034 1.93095C2.88032 0.980972 4.15652 0.428575 5.49933 0.386135C6.84213 0.343696 8.15067 0.814403 9.15874 1.7025C10.1668 2.59059 10.7987 3.82937 10.9258 5.16681C11.053 6.50425 10.6659 7.8399 9.84319 8.90204L9.78074 8.98266ZM5.66672 9.71666C6.74084 9.71666 7.77098 9.28996 8.5305 8.53044C9.29002 7.77092 9.71672 6.74079 9.71672 5.66666C9.71672 4.59253 9.29002 3.5624 8.5305 2.80288C7.77098 2.04335 6.74084 1.61666 5.66672 1.61666C4.59259 1.61666 3.56246 2.04335 2.80293 2.80288C2.04341 3.5624 1.61672 4.59253 1.61672 5.66666C1.61672 6.74079 2.04341 7.77092 2.80293 8.53044C3.56246 9.28996 4.59259 9.71666 5.66672 9.71666Z"
              fill="#F5F5F5"
              stroke="#1D1D1D"
              stroke-width="0.1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
