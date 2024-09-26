import React, { forwardRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ModalPortal from "./ModalPortal";
import Image from "next/image";
import { deleteProps, xProps } from "@/admin-new/(consts)/sidebar";
import { usePutTheme } from "@/mutations/putTheme";
import useModal from "@/hooks/useModal";
import DialogDeleteBody from "@/components/common/Dialog-new/DialogDeleteBody";
import DialogBody from "./DialogBody";
import "@/components/common/Dialog-new/dialog.css";
import { useDeleteTheme } from "@/mutations/deleteTheme";

interface DialogProps {
  id?: number;
  ref?: HTMLDivElement;
  type?: string;
}

interface FormValues {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}
const Dialog = forwardRef<HTMLFormElement, DialogProps>(({ id, type }, ref) => {
  const { open, close } = useModal();

  const handleOpenModal = () => {
    open(Dialog, { id, type: "delete" });
  };
  const { handleSubmit } = useForm<FormValues>();
  const { mutateAsync: putTheme } = usePutTheme();
  const { mutateAsync: deleteTheme } = useDeleteTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const submitData = {
      id: 48,
      title: "test",
      timeLimit: 60,
      hintLimit: 60,
    };

    // type === "put" ? putTheme(submitData) : deleteTheme({ id });
    close();
  };

  return (
    <ModalPortal>
      <form
        className="theme-info-modal"
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="theme-info-modal__header">
          <h2> {type === "put" ? "테마 정보" : "정말로 삭제하시겠어요?"}</h2>

          <button className="close-button" type="button" onClick={close}>
            <Image {...xProps} />
          </button>
        </div>
        {type === "put" ? <DialogBody /> : <DialogDeleteBody />}
        <div className="theme-info-modal__footer">
          {type === "put" && (
            <button
              className="delete-button icon_button32"
              onClick={handleOpenModal}
              type="button"
            >
              <Image {...deleteProps} />
              테마 삭제하기
            </button>
          )}
          <div className="action-buttons">
            <button
              className="cancel outline_button32"
              type="button"
              onClick={close}
            >
              취소
            </button>
            <button className="button32" type="submit">
              {type === "delete" ? "삭제하기" : "저장"}
            </button>
          </div>
        </div>
      </form>
    </ModalPortal>
  );
});

export default Dialog;
