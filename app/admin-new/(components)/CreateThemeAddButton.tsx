import { useCreateThemeValue } from "@/components/atoms/createTheme.atom";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { usePostTheme } from "@/mutations/postTheme";
import { useGetThemeList } from "@/queries/getThemeList";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";

export default function CreateThemeAddButton() {
  const createTheme = useCreateThemeValue();
  const isDisabled = !(
    createTheme.title &&
    createTheme.timeLimit &&
    (createTheme.hintLimit || createTheme.hintLimit === 0)
  );

  const { data: getThemeList = [] } = useGetThemeList();
  const { mutateAsync: postTheme } = usePostTheme();
  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  const router = useRouter();

  const handleClickSubmit = () => {
    if (isDisabled) return;
    postTheme(createTheme);
    setSelectedTheme(getThemeList[getThemeList.length - 1]);
    if (selectedTheme.id) {
      router.push(`/admin?themeId=${encodeURIComponent(selectedTheme.id)}`);
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
