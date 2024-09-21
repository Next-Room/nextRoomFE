import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/(types)/createThemeType";
import React, { ChangeEvent, FocusEvent, RefObject } from "react";

export default function ThemeFocusingTextField({
  title,
  infoText,
  inputType,
  inputPlaceholder,
  inputValue,
  inputRef,
  onChange: handleInputChange,
  onBlur: handleInputBlur,
}: ThemeInfoTextFieldType & {
  inputValue: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <button className="theme-info focus" type="button">
        <div className="theme-info-title focus">{title}</div>
        <input
          ref={inputRef}
          className="theme-info-input"
          type={inputType}
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </button>
      {infoText && <div className="theme-info-text">{infoText}</div>}
    </div>
  );
}
