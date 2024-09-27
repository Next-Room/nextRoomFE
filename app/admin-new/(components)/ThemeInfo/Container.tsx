import React from "react";
import "../../(style)/themeInfo.modules.sass";
import useModal from "@/hooks/useModal";
import Dialog from "@/components/common/Dialog-new/Dialog";
import ThemeInfoTitle from "./ThemeInfoTitle";
import ThemeInfoBody from "./ThemeInfoBody";

export default function ThemeInfo() {
  const { open } = useModal();

  const handleOpenModal = () => {
    open(Dialog, { type: "put" });
  };

  return (
    <div className="theme-infomation">
      <ThemeInfoTitle handleOpenModal={handleOpenModal} />
      <ThemeInfoBody handleOpenModal={handleOpenModal} />
    </div>
  );
}
