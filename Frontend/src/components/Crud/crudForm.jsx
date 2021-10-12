import React, { useState, useEffect } from "react";
import styles from "../../styles/form.module.css";

const initialForm = {
  id: null,
  name: "",
  category: "",
  supplier: "",
  stock: "",
  date: "",
  description: "",
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

    if (form.id === null) {
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
          {dataToEdit ? "Editar" : "Agregar producto"}
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <p>Ingresa el nombre</p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa la categoría</p>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa el proveedor</p>
            <input
              type="text"
              name="supplier"
              value={form.supplier}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa número de existencias</p>
            <input
              type="text"
              name="stock"
              placeholder="Categoria"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa la fecha</p>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Ingresa la descripción</p>
            <input
              type="text"
              name="description"
              value={form.description}
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
