import React from "react";
import { useModalState } from "./modals.atom";

// Modal 상태 타입 정의
interface ModalComponentProps<P> {
  Component: React.FC<P>;
  props?: P;
}

// 모달을 열고 닫는 로직을 구현한 커스텀 훅
const useModal = () => {
  const [modals, setModals] = useModalState();

  // 모달 열기 함수
  const open = <P extends Record<string, unknown>>(
    Component: React.FC<P>,
    props?: P
  ) => {
    setModals((currentModals) => [
      ...currentModals,
      { Component, props } as ModalComponentProps<P>,
    ]);
  };

  // 모달 닫기 함수
  const close = () => {
    setModals((currentModals) => currentModals.slice(0, -1)); // 마지막 모달을 제거
  };

  return { modals, open, close };
};

export default useModal;
