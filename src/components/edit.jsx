import styles from "../styles/form.module.css";

export default function Edit() {
  return (
    <section className={styles.sectionForm}>
      <div className={styles.formContainer}>
        <div>
          <p className={styles.formTitle}>Editar producto</p>
          <form className={styles.form}>
            <div>
              <p>Ingresa el nombre</p>
              <input type="text" />
            </div>

            <div>
              <p>Ingresa la categoría</p>
              <input type="text" />
            </div>

            <div>
              <p>Ingresa el proveedor</p>
              <input type="text" />
            </div>

            <div>
              <p>Ingresa número de existencias</p>
              <input type="text" />
            </div>

            <div>
              <p>Ingresa la fecha</p>
              <input type="text" />
            </div>

            <div>
              <p>Ingresa la descripción</p>
              <textarea></textarea>
            </div>

            <button>Editar producto</button>
          </form>
        </div>
      </div>
    </section>
  );
}
