import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b-2 p-2 text-center">Login and get 20% off!</div>
      {children}
    </>
  );
}
