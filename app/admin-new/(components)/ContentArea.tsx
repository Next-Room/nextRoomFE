import Dialog from "@/components/common/Dialog-new/Dialog";
import { NewTextField } from "@/signup/NewTextField.component";
import React, { useState } from "react";

export default function ContentArea() {
  const [modalOpen, setModalOpen] = useState<boolean>();

  return (
    <div className="content-area">
      <NewTextField />
      <button
        type="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        확인
      </button>
      {modalOpen && <Dialog />}
    </div>
  );
}
