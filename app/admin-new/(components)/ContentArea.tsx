import React from "react";
import CreateTheme from "./CreateTheme/Container";
import ThemeInfo from "./ThemeInfo/Container";
import { useModalStateValue } from "@/components/atoms/modals.atom";

export default function ContentArea() {
  const modals = useModalStateValue();

  return (
    <div className="content-area">
      {/* <CreateTheme /> */}
      <ThemeInfo />
      {modals.map((modal) => {
        const { Component, props } = modal;
        return (
          <div className="modal">
            <Component {...props} />
          </div>
        );
      })}
    </div>
  );
}
