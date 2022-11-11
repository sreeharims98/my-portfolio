import React from "react";

const Loader = ({ full }: { full: boolean }) => {
  if (full) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"
        ></div>
      </div>
    );
  } else {
    return (
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"
      ></div>
    );
  }
};

export default Loader;
