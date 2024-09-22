// src/components/ModalPortal.ts
import { ReactNode } from "react";
import ReactDom from "react-dom";
import "@/components/common/Dialog-new/dialog.css";
interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById("modal-root") as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
