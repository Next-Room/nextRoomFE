import React, { forwardRef } from "react";
import { usePutTheme } from "@/mutations/putTheme";
import { useDeleteTheme } from "@/mutations/deleteTheme";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { deleteProps, xProps } from "@/admin-new/(consts)/sidebar";
import useModal from "@/hooks/useModal";
import DialogDeleteBody from "@/components/common/Dialog-new/DialogDeleteBody";
import DialogBody from "./DialogBody";
import "@/components/common/Dialog-new/dialog.css";
import ModalPortal from "./ModalPortal";
import { useSelectedThemeValue } from "@/components/atoms/selectedTheme.atom";
import {
  useCreateThemeReset,
  useCreateThemeValue,
} from "@/components/atoms/createTheme.atom";

interface DialogProps {
  type?: string | "";
}

interface FormValues {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}
const Dialog = forwardRef<HTMLFormElement, DialogProps>((props, ref) => {
  const { open, close } = useModal();
  const { type = "" } = props;

  const handleOpenModal = () => {
    open(Dialog, { type: "delete" });
  };
  const { handleSubmit } = useForm<FormValues>();
  const selectedTheme = useSelectedThemeValue();
  const createTheme = useCreateThemeValue();
  const resetCreateTheme = useCreateThemeReset();
  const isDisabled = !(
    createTheme.title &&
    createTheme.timeLimit &&
    createTheme.hintLimit
  );

  const { mutateAsync: putTheme } = usePutTheme();
  const { mutateAsync: deleteTheme } = useDeleteTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = () => {
    const submitData = {
      ...createTheme,
      id: selectedTheme.id,
    };
    const id: number = selectedTheme.id;
    type === "put" ? putTheme(submitData) : deleteTheme({ id });
    close();
    resetCreateTheme();

    return close();
  };

  return (
    <ModalPortal>
      <form
        className={`theme-info-modal ${type}`}
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="theme-info-modal__header">
          <h2>
            {type === "put" ? "테마 정보 수정" : "정말로 삭제하시겠어요?"}
          </h2>
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
            <button className="button32" type="submit" disabled={isDisabled}>
              {type === "delete" ? "삭제하기" : "저장"}
            </button>
          </div>
        </div>
      </form>
    </ModalPortal>
  );
});

Dialog.defaultProps = {
  type: "",
};
export default Dialog;
