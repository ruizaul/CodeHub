import React from "react";
import { classNames } from "./Utils";

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-4 py-2 border border-neutral-600 text-sm font-medium rounded-md text-gray-200 bg-neutral-700 hover:bg-neutral-600",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-neutral-600 bg-neutral-700 text-sm font-medium text-gray-500 hover:bg-neutral-600",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
