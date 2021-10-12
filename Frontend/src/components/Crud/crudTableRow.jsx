//import styles from "../styles/table.module.css";

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
  let { id, name, category, supplier, stock, date, description } = el;
  return (
    <tr class="text-center align-middle">
      <td scope="row" class="align-middle">
        {id}
      </td>
      <td scope="row" class="align-middle">
        {name}
      </td>
      <td scope="row" class="align-middle">
        {category}
      </td>
      <td scope="row" class="align-middle">
        {supplier}
      </td>
      <td scope="row" class="align-middle">
        {stock}
      </td>
      <td scope="row" class="align-middle">
        {date}
      </td>
      <td scope="row" class="align-middle">
        {description}
      </td>
      <td scope="row" class="d-flex justify-content-around py-4">
        <box-icon
          name="edit"
          type="solid"
          color="#703bda"
          onClick={() => setDataToEdit(el)}
          style={{ cursor: "pointer" }}
        ></box-icon>
        <box-icon
          name="trash-alt"
          type="solid"
          color="#703bda"
          onClick={() => deleteData(id, name)}
          style={{ cursor: "pointer" }}
        ></box-icon>
      </td>
    </tr>
  );
}
