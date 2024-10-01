import { FormEvent } from "react";
import "../../(style)/createTheme.modules.sass";
import { useRouter } from "next/navigation";
import { usePostTheme } from "@/mutations/postTheme";
import { useCreateThemeValue } from "@/components/atoms/createTheme.atom";
import { useSelectedThemeWrite } from "@/components/atoms/selectedTheme.atom";
import CreateThemeTitle from "./CreateThemeTitle";
import CreateThemeBody from "./CreateThemeBody";
import CreateThemeAddButton from "./CreateThemeAddButton";

export default function CreateTheme() {
  const router = useRouter();
  const createTheme = useCreateThemeValue();
  const setSelectedTheme = useSelectedThemeWrite();
  const { mutateAsync: postTheme } = usePostTheme();

  const handleKeyDownSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isDisabled =
      (!(createTheme.title && createTheme.timeLimit && createTheme.hintLimit) &&
        createTheme.timeLimit < 1) ||
      createTheme.timeLimit > 10000 ||
      (createTheme.hintLimit && createTheme.hintLimit > 1000);
    if (isDisabled) {
      return;
    }
    const response = await postTheme(createTheme);
    const { id } = response.data.data;
    if (id) {
      setSelectedTheme(createTheme);
      router.push(`/admin-new?themeId=${encodeURIComponent(id)}`);
    }
  };

  return (
    <form className="create-theme" onSubmit={handleKeyDownSubmit}>
      <CreateThemeTitle />
      <CreateThemeBody />
      <CreateThemeAddButton />
    </form>
  );
}
