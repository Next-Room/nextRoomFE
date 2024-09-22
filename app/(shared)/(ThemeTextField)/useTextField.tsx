import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";
import {
  useCreateThemeReset,
  useCreateThemeWrite,
} from "@/components/atoms/createTheme.atom";
import { ThemeInfoTextFieldType } from "./createThemeType";

export const useTextField = ({
  id,
  content,
  checkError,
}: ThemeInfoTextFieldType) => {
  const [inputValue, setInputValue] = useState<string>(content || "");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>(content || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const setCreateTheme = useCreateThemeWrite();
  const resetCreateTheme = useCreateThemeReset();
  resetCreateTheme();

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
    const error = checkError ? checkError(cur) : "";
    if (error) {
      setErrorText(error);
      setInputValue(inputValue);
      return;
    }

    setErrorText("");
    setInputValue(cur);
  };

  const handleInfoClick = () => {
    setIsFocus(true);
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

  return {
    inputValue,
    isFocus,
    setIsFocus,
    errorText,
    inputRef,
    handleInputChange,
    handleInfoClick,
    handleInputBlur,
  };
};

export default useTextField;
