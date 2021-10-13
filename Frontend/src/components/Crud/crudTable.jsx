import styles from "../../styles/table.module.css";
import CrudTableRow from "./crudTableRow";

export default function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.table}>
        <div class="table-responsive">
          <table class="table table-hover  table-bordered " thead>
            <thead class="thead-info text-center">
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Proveedor</th>
              <th scope="col">N. de existencias</th>
              <th scope="col">Fecha</th>
              <th scope="col">Descripción</th>
              <th scope="col">Opciones</th>
            </thead>
            <tbody className={styles.tBody}>
              {data.length > 0 ? (
                data.map((el) => (
                  <CrudTableRow
                    key={el.pro_id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="3">Sin datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
