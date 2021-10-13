import logo from "../Assets/logo.svg";
import styles from "../styles/header.module.css";
import React, { useState } from "react";

export default function Header(props) {
  return (
    <>
      <header>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} alt="logo" />

          <div className={styles.personContainer}>
            <div className={styles.personInfo}>
              <p className={styles.name}>Usuario</p>
              <p className={styles.category}>Administrador</p>
            </div>
            <div>
              <i
                class="bx bx-exit"
                style={{
                  color: "#703bda",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
