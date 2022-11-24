import axios from "axios";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import { Table, AvatarCell, StatusPill } from "../../components";

import emojiuser from "../../assets/emojiuser.png";

export const UsuariosPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sf-rest-server.vercel.app/api/usuarios/")
      .then((response) => {
        setData(response.data.usuarios);
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
      <div className="min-h-fit rounded-2xl  bg-neutral-800 text-gray-200">
        <main className="w-full mx-auto p-8">
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <img src={emojiuser} alt="" className="w-10 h-10" />
            <h1 className="self-center text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-green-700">
              Usuarios
            </h1>
          </div>

          <div className="mt-6">
            <Table columns={columns} data={data} />
          </div>
        </main>
      </div>
    </>
  );
};
