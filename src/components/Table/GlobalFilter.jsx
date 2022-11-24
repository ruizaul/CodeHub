import React from "react";
import { useAsyncDebounce } from "react-table";

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-200">Buscar: </span>
      <input
        type="text"
        className="w-24 md:w-36 rounded-md shadow-sm p-1 bg-neutral-600 text-gray-200"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} usuarios...`}
      />
    </label>
  );
}
