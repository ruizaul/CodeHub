import axios from "axios";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import {
  Table,
  AvatarCell,
  StatusPill,
  Modal,
  Form,
  TableActionButtons,
} from "../../components";

import emojiempleado from "../../assets/emojiempleado.png";
import agregaempleado from "../../assets/agregaempleado.png";

export const EmpleadosPage = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
      {
        Header: "Editar",
        accessor: "uid",
        Cell: (e) => {
          return (
            <>
              <TableActionButtons
                data={e.cell.row.original}
                showModal={showModal2}
                setShowModal={setShowModal2}
              ></TableActionButtons>
              <Modal
                isVisible={showModal2}
                onClose={() => {
                  setShowModal2(false);
                }}
              >
                asd
              </Modal>
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <div className="flex flex-col gap-2 p-4 items-center justify-center min-h-fit rounded-2xl bg-neutral-800 text-gray-200">
        <div className="flex flex-row gap-x-2 items-center justify-center">
          <img src={agregaempleado} alt="" className="w-10 h-10" />
          <h1 className="self-center text-2xl p-2 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-green-700">
            Agrega un nuevo empleado!
          </h1>
        </div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <div className="p-4">
            <div className="grid gap-8 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative px-7 py-4 bg-neutral-800/10 rounded-lg leading-none items-center">
                  <span className="flex justify-center items-center">
                    <span className="text-gray-100 font-mono font-semibold text-lg">
                      Agregar Empleado
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>
        <Modal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <Form />
        </Modal>
      </div>

      <div className="min-h-fit rounded-2xl mt-5 bg-neutral-800 text-gray-200">
        <main className="w-full mx-auto p-8">
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <img src={emojiempleado} alt="" className="w-10 h-10" />
            <h1 className="self-center text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-green-700">
              Empleados
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
