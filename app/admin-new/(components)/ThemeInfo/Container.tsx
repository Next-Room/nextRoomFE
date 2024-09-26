import React from "react";
import "../../(style)/themeInfo.modules.sass";
import ThemeInfoTitle from "./ThemeInfoTitle";
import ThemeInfoBody from "./ThemeInfoBody";
import useModal from "@/hooks/useModal";
import Dialog from "@/components/common/Dialog-new/Dialog";
import { useModalStateValue } from "@/components/atoms/modals.atom";

export default function ThemeInfo() {
  const id = 48;

  const { open } = useModal();

  const handleOpenModal = () => {
    open(Dialog, { id, type: "put" });
  };

  return (
    <>
      <div className="theme-info">
        <ThemeInfoTitle handleOpenModal={handleOpenModal} />
        <ThemeInfoBody handleOpenModal={handleOpenModal} />
      </div>
    </>
  );
}
