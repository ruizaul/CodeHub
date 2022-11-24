import axios from "axios";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import { Table, AvatarCell, StatusPill } from "../../components";

import emojiempleado from "../../assets/emojiempleado.png";

export const EmpleadosPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sf-rest-server.vercel.app/api/empleados/")
      .then((response) => {
        setData(response.data.empleados);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
        Cell: AvatarCell,
        emailAccessor: "correo",
      },
      {
        Header: "Estado",
        accessor: "estado",
        Cell: StatusPill,
      },
      {
        Header: "Rol",
        accessor: "rol",
      },
    ],
    []
  );

  return (
    <>
      <div className="min-h-fit rounded-2xl bg-neutral-800 text-gray-200">
        <main className="w-full mx-auto p-8">
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <img src={emojiempleado} alt="" className="w-10 h-10" />
            <h1 className="self-center text-4xl font-semibold">Empleados</h1>
          </div>

          <div className="mt-6">
            <Table columns={columns} data={data} />
          </div>
        </main>
      </div>
    </>
  );
};
