import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import React from "react";

interface ModalComponentProps<P> {
  Component: React.FC<P>;
  props?: P;
}

export const modals = atom<ModalComponentProps<any>[]>({
  key: "modals",
  default: [],
});

export const useModalState = () => useRecoilState(modals);
export const useModalStateValue = () => useRecoilValue(modals);
export const useModalStateWrite = () => useSetRecoilState(modals);
