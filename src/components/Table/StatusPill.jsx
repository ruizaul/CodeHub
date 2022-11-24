import React from "react";
import { classNames } from "./shared/Utils";

export function StatusPill({ value }) {
  const status = value ? "activo" : "inactivo";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("activo") ? "bg-green-500 text-gray-100" : null,
        status.startsWith("inactivo") ? "bg-yellow-300 text-white" : null
      )}
    >
      {status}
    </span>
  );
}
