export const TableActionButtons = ({ data, setShowModal2, showModal2 }) => {
  return (
    <div className="flex justify-center items-end">
      {/*"Editar"*/}
      <button
        className="z-0 block p-4 text-blue-700 transition-all bg-neutral-700 border-2 border-neutral-600 rounded-full active:bg-blue-50 hover:scale-110 "
        type="button"
        onClick={() => {
          setShowModal2(true);
        }}
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </button>
    </div>
  );
};
