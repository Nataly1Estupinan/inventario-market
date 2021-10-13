import React, { useState, useEffect } from "react";
import styles from "../../styles/form.module.css";

const initialForm = {
  pro_id: null,
  pro_name: "",
  pro_provider: "",
  pro_existences: "",
  pro_date: "",
  pro_description: "",
  pro_category: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* if (!form.name || !form.category) {
      alert("datos incompletos");
      return;
    } */

    if (form.pro_id === null) {
      createData(form);
      setForm(initialForm);
    } else {
      updateData(form);
    }
  };
  /* 
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  }; */

  return (
    <section className={styles.sectionForm}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>
          {dataToEdit ? "Editar producto" : "Agregar producto"}
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <p>Ingresa el nombre</p>
            <input
              type="text"
              name="name"
              value={form.pro_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa la categoría</p>
            <input
              type="text"
              name="category"
              value={form.pro_category}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa el proveedor</p>
            <input
              type="text"
              name="supplier"
              value={form.pro_provider}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa número de existencias</p>
            <input
              type="text"
              name="stock"
              placeholder="Categoria"
              value={form.pro_existences}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa la fecha</p>
            <input
              type="date"
              name="date"
              value={form.pro_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa la descripción</p>
            <input
              type="text"
              name="description"
              value={form.pro_description}
              onChange={handleChange}
            />
          </div>

          <input
            type="submit"
            value={dataToEdit ? "Editar producto" : "Guardar producto"}
            className={styles.btnSubmit}
          />
        </form>
      </div>
    </section>
  );
}
