import Dialog from "@/components/common/Dialog-new/Dialog";
import { NewTextField } from "@/signup/NewTextField.component";
import React from "react";
import { useModalStateValue } from "@/components/atoms/modals.atom";
import useModal from "@/hooks/useModal";

export default function ContentArea() {
  const id = 48;

  const { open } = useModal();

  const handleOpenModal = () => {
    open(Dialog, { id, type: "put" });
  };

  const modals = useModalStateValue();

  return (
    <div className="content-area">
      <NewTextField />
      <button type="button" onClick={handleOpenModal}>
        확인
      </button>
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
