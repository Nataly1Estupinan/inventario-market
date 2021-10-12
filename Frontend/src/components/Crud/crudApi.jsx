import React, { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import CrudForm from "./crudForm";
import CrudTable from "./crudTable";

export default function CrudApi() {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:5000/inventory";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.ok) {
        setDb(res);
      } else {
        setDb(null);
      }
    });
  }, []);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "Content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.ok) {
        setDb([...db, res]);
      } else {
        setDb(null);
      }
    });
  };

  const updateData = (data) => {
    let options = {
      body: data,
      headers: { "Content-type": "application/json" },
    };

    let endpoint = `${url}/${data.id}`;

    api.put(endpoint, options).then((res) => {
      if (!res.ok) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setDataToEdit(null);
      } else {
        setDb(null);
      }
    });
  };

  const deleteData = (id, name) => {
    let isDeleted = window.confirm(
      `Estas seguro de eliminar el producto: "${name}"`
    );

    if (isDeleted) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "Content-type": "application/json" },
      };

      api.del(endpoint).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          return;
        }
      });
    }
  };

  return (
    <>
      {/* <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <br /> */}
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
}
