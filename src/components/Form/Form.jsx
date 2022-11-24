import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorClick, SuccessClick } from "../UI/Alerts";

export const Form = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    nombre: "",
    correo: "",
    password: "",
    rol: "EMPLEADO_ROLE",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post("https://sf-rest-server.vercel.app/api/empleados", {
        nombre: data.nombre,
        correo: data.correo,
        password: data.password,
        rol: "EMPLEADO_ROLE",
      })
      .then(() => {
        SuccessClick();
        setTimeout(() => navigate(0), 1500);
      })
      .catch((error) => {
        const errors = error.response.data.errors[0].msg;
        console.log(errors);
        ErrorClick(errors);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <>
      <div className="w-full p-2 bg-neutral-800">
        <form
          onSubmit={(e) => {
            submit(e);
          }}
        >
          <h1 className="text-center font-mono p-4 text-3xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">
            Ingrese los datos del empleado
          </h1>
          <div className="flex flex-col gap-2 bg-neutral-800 p-2 rounded-sm">
            <div className="form-group mb-6">
              <h1>Nombre:</h1>
              <input
                autoComplete="off"
                autoFocus
                type="text"
                required
                onChange={(e) => handle(e)}
                className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="nombre"
                placeholder="Michi"
              />
            </div>

            <div className="form-group mb-6">
              <h1>Correo:</h1>
              <input
                autoComplete="new-password"
                type="email"
                required
                onChange={(e) => handle(e)}
                className="
                    form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="correo"
                placeholder="Michi123@gmail.com"
              />
            </div>

            <div className="form-group mb-6">
              <h1>Contraseña:</h1>
              <input
                autoComplete="new-password"
                type="password"
                required
                onChange={(e) => handle(e)}
                className="
                    form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="123456"
              />
            </div>

            <button
              className="
                  mt-6
                  w-full
                  px-6
                  py-2.5
                  bg-teal-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-teal-700 hover:shadow-lg
                  focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-teal-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
            >
              Crear empleado
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
