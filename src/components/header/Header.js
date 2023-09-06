import React from "react";
import style from "./style.css";

export default function Header() {
  return (
    <header style={style}>
      <div className="header-items">
            <h1>Money Mind</h1>
            <div className="header-buttons">
            <button id="sign-up"></button>
        </div>
      </div>
    </header>
  );
}
