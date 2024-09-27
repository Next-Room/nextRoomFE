import { useCreateThemeValue } from "@/components/atoms/createTheme.atom";
import { usePostTheme } from "@/mutations/postTheme";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreateThemeAddButton() {
  const createTheme = useCreateThemeValue();
  const isDisabled = !(
    createTheme.title &&
    createTheme.timeLimit &&
    createTheme.hintLimit
  );

  const { mutateAsync: postTheme } = usePostTheme();
  const router = useRouter();

  const handleClickSubmit = async () => {
    const response = await postTheme(createTheme);
    const { id } = response.data;
    if (id) {
      router.push(`/admin?themeId=${encodeURIComponent(id)}`);
    }
  };

  return (
    <button
      type="submit"
      className={classNames("create-theme__add-button", {
        disable: isDisabled,
      })}
      onClick={handleClickSubmit}
    >
      테마 추가
    </button>
  );
}
