import React from "react";
import { useModalStateValue } from "@/components/atoms/modals.atom";
import { useSearchParams } from "next/navigation";
import CreateTheme from "./CreateTheme/Container";
import ThemeInfo from "./ThemeInfo/Container";

export default function ContentArea() {
  const modals = useModalStateValue();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString()).toString();

  return (
    <div className="content-area" key={params}>
      {params ? (
        <>
          <ThemeInfo />
          {modals.map((modal) => {
            const { Component, props } = modal;
            return (
              <div
                className={`modal ${props.type}`}
                key={`${params}_${props.type}`}
              >
                <Component {...props} />
              </div>
            );
          })}
        </>
      ) : (
        <CreateTheme />
      )}
    </div>
  );
}
