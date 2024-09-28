import React from "react";
import { useCreateThemeReset } from "@/components/atoms/createTheme.atom";
import ThemeTextField from "../../../(shared)/(ThemeTextField)/Container";
import {
  hintCountTextFieldProps,
  nameTextFieldProps,
  timeTextFieldProps,
} from "./createTheme";
import { useSelectedThemeReset } from "@/components/atoms/selectedTheme.atom";

export default function CreateThemeBody() {
  const resetCreateTheme = useCreateThemeReset();
  const resetSelectedTheme = useSelectedThemeReset();

  resetCreateTheme();
  resetSelectedTheme();
  return (
    <div className="create-theme__body">
      <ThemeTextField {...nameTextFieldProps} />
      <ThemeTextField {...timeTextFieldProps} />
      <ThemeTextField {...hintCountTextFieldProps} />
    </div>
  );
}
