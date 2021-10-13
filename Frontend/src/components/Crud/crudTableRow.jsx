//import styles from "../styles/table.module.css";

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
  let {
    pro_id,
    pro_name,
    pro_category,
    pro_provider,
    pro_existences,
    pro_date,
    pro_description,
  } = el;
  return (
    <tr class="text-center align-middle">
      <td class="align-middle">{pro_id}</td>
      <td class="align-middle">{pro_name}</td>
      <td class="align-middle">{pro_category}</td>
      <td class="align-middle">{pro_provider}</td>
      <td class="align-middle">{pro_existences}</td>
      <td class="align-middle">{pro_date}</td>
      <td class="align-middle">{pro_description}</td>
      <td class="d-flex justify-content-around py-4">
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
          onClick={() => deleteData(pro_id, pro_name)}
          style={{ cursor: "pointer" }}
        ></box-icon>
      </td>
    </tr>
  );
}
