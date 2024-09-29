import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCreateTheme } from "@/components/atoms/createTheme.atom";
import { ThemeInfoTextFieldType } from "./TextFieldType";
import { usePostTheme } from "@/mutations/postTheme";
import { useRouter } from "next/navigation";

export const useTextField = ({
  id,
  content,
  checkErrorText,
}: ThemeInfoTextFieldType) => {
  const [inputValue, setInputValue] = useState<string>(content || "");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [createTheme, setCreateTheme] = useCreateTheme();
  const { mutateAsync: postTheme } = usePostTheme();

  useEffect(() => {
    setCreateTheme((prev) => ({
      ...prev,
      [id]: inputValue,
    }));
  }, [inputValue, id, setCreateTheme]);

  useEffect(() => {
    if (!isFocus || !inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, [isFocus]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cur = e.target.value;
    if (cur.length > 1 && cur.length === cur.split("0").length - 1) {
      setInputValue("0");
      return;
    }
    const error = checkErrorText ? checkErrorText(cur) : "";
    if (error) {
      setErrorText(error);
      setInputValue(inputValue);
      return;
    }
    setErrorText("");
    setInputValue(cur);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (
      !e.relatedTarget ||
      (e.relatedTarget.className !== "theme-info focus" &&
        e.relatedTarget.className !== "theme-info error")
    ) {
      setIsFocus(false);
      return;
    }
    inputRef.current?.focus();
    setIsFocus(true);
  };

  const handleKeyDownSubmit = async (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      const isDisabled = !(
        createTheme.title &&
        createTheme.timeLimit &&
        createTheme.hintLimit
      );
      if (isDisabled) {
        return;
      }
      const response = await postTheme(createTheme);
      const { id } = response.data;
      if (id) {
        router.push(`/admin?themeId=${encodeURIComponent(id)}`);
      }
    }
  };

  return {
    inputValue,
    isFocus,
    setIsFocus,
    errorText,
    inputRef,
    handleInputChange,
    handleInputBlur,
    handleKeyDownSubmit,
  };
};

export default useTextField;
