import React from "react";
import style from "./style.css";
import emailIcon from "../../images/emailIcon.png";
import passwordIcon from "../../images/passwordIcon.png";
import logo from "../../images/logo.png";

export default function Main() {
  return (
    <main>
      <div className="app-logo">
        <img src={logo}></img>
      </div>

      <div className="forms-container">
        <form className="forms">
          <div className="icons">
            <img className="emailIcon" src={emailIcon}></img>
            <img className="passIcon" src={passwordIcon}></img>
          </div>

          <div class="form">
            <input type="text" name="text" autocomplete="off" required />
            <label for="text" class="label-name">
              <span class="content-name">E-mail</span>
            </label>
          </div>

          <div class="formTwo">
            <input type="text" name="text" autocomplete="off" required />
            <label for="text" class="label-name">
              <span class="content-name">Senha</span>
            </label>
          </div>
          <div className="buttons-container">
            <button className="log">Login</button>
            <button className="reg">Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
}
