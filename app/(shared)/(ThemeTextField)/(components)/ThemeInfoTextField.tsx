import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/(types)/createThemeType";
import React from "react";

export default function ThemeInfoTextField({
  title,
  infoText,
  onClick: handleInfoClick,
}: ThemeInfoTextFieldType & { onClick: () => void }) {
  return (
    <div>
      <button className="theme-info" type="button" onClick={handleInfoClick}>
        <div className="theme-info-title">{title}</div>
      </button>
      {infoText && <div className="theme-info-text">{infoText}</div>}
    </div>
  );
}
