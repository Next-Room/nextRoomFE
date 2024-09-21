import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/(types)/createThemeType";
import "../(style)/textField.css";
import React from "react";

export default function ThemeFilledTextField({
  title,
  infoText,
  inputValue,
  onClick: handleInfoClick,
}: ThemeInfoTextFieldType & {
  inputValue: string;
  onClick: () => void;
}) {
  return (
    <div>
      <button
        className="theme-info filled"
        type="button"
        onClick={handleInfoClick}
      >
        <div className="theme-info-title filled">{title}</div>
        <div className="theme-info-input filled">{inputValue}</div>
      </button>
      {infoText && <div className="theme-info-text filled">{infoText}</div>}
    </div>
  );
}
