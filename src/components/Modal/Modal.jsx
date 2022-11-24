import registerempleado from "../../assets/registerempleado.jpg";

export const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <>
      <div
        id="wrapper"
        className="fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        onClick={handleClose}
      >
        <div className="w-fit flex flex-col">
          <button
            className="text-gray-300 p-2 text-xl self-end pr-2 mb-1 hover:bg-neutral-600 hover:rounded-md hover:text-gray-300"
            onClick={() => {
              onClose();
            }}
          >
            X
          </button>
          <div className="bg-neutral-800 p-2 rounded flex flex-row">
            <img
              src={registerempleado}
              className="hidden md:block md:w-72 md:h-auto"
              alt=""
            />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
