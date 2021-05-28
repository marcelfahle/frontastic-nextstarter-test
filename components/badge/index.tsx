import React from "react";

export default function Badge({ count, children, displayZeroCount, onClick }) {
  return (
    <div className="badge-wrapper" onClick={onClick}>
      {children}
      {(displayZeroCount || count !== 0) && (
        <span className="badge-count text-xs mt-2">{count}</span>
      )}
    </div>
  );
}
