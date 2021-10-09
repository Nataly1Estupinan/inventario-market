import styles from "../styles/login.module.css";
import logo from "../Assets/logo.svg";
import basquet from "../Assets/basquetLogin.svg";

export default function Login() {
  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <div className={styles.login_info_Container}>
          <img src={logo} className={styles.logo} alt="Logo_Mercatodo" />
          <img src={basquet} className={styles.basquet} alt="Logo_Mercatodo" />
          <p className={styles.titleLogin}>Iniciar sesión</p>
          <div>
            <form>
              <div>
                <p className={styles.inputText}>Usuario</p>
                <input className={styles.input} type="text" />
              </div>

              <div>
                <p className={styles.inputText}>Contraseña</p>
                <input className={styles.input} type="password" />
              </div>

              <button className={styles.inputBtn}>Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
