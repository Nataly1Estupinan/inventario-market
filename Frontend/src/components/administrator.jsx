import style from "../styles/administrator.module.css";

export default function Administrator() {
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
        <div className={style.addContainer}>
          <div class="dropdown">
            <button
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
          <button className={style.addBtn}>Agregar +</button>
        </div>
      </div>
    </div>
  );
}
