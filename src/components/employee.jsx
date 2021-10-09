import style from "../styles/employee.module.css";

export default function Employee() {
  return (
    <div className={style.inventoryMenu}>
      <div className={style.inventorycontainer}>
        <div className={style.inventorySearch}>
          <p className={style.title}>Inventario</p>
          <input
            className={style.inputSearch}
            type="search"
            placeholder="Buscar ..."
          />
        </div>

        <div class="dropdown">
          <button
            className={style.filterBtn}
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>Filtrar por </span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Frutas
            </a>
            <a class="dropdown-item" href="#">
              Quesos
            </a>
            <a class="dropdown-item" href="#">
              Aseo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
