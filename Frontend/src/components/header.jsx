import logo from "../Assets/logo.svg";
import styles from "../styles/header.module.css";
import Administrator from "./administrator";
import CrudApi from "./Crud/crudApi";

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} alt="logo" />

          <div className={styles.personContainer}>
            <div className={styles.personInfo}>
              <p className={styles.name}>Laura Bozzo</p>
              <p className={styles.category}>Empleado</p>
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
      <Administrator></Administrator>
      <CrudApi />
    </>
  );
}
