import styles from "../styles/login.module.css";
import logo from "../Assets/logo.svg";
import basquet from "../Assets/basquetLogin.svg";
import React, { useState } from "react";
import { StartApp } from "..";
import Header from "./header";
import App from "../App";

const initialForm = {
  user: "admin",
  password: "123",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.password) {
      alert("datos incompletos");
      return;
    }

    if (form.user === "admin" && form.password === "123") {
      alert("Ingreso satisfactoriamente");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.login_info_Container}>
          <img src={logo} className={styles.logo} alt="Logo_Mercatodo" />
          <img src={basquet} className={styles.basquet} alt="Logo_Mercatodo" />
          <p className={styles.titleLogin}>Iniciar sesión</p>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <p className={styles.inputText}>Usuario</p>
                <input
                  className={styles.input}
                  type="text"
                  name="user"
                  value={form.user}
                  onChange={handleChange}
                />
              </div>

              <div>
                <p className={styles.inputText}>Contraseña</p>
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button className={styles.inputBtn}>Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
