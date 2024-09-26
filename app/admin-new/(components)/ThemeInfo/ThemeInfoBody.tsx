import { useSelectedThemeValue } from "@/components/atoms/selectedTheme.atom";
import React from "react";
interface Props {
  handleOpenModal: () => void;
}
export default function ThemeInfoBody({ handleOpenModal }: Props) {
  const selectedTheme = useSelectedThemeValue();
  const themeInfo = [
    {
      title: "탈출 제한 시간",
      content: `${selectedTheme.timeLimit}분`,
    },
    {
      title: "사용 가능한 힌트",
      content: `${selectedTheme.hintLimit}개`,
    },
  ];

  return (
    <div className="theme-info__body">
      <div className="theme-info-text">테마 정보</div>
      <div className="theme-info-container">
        {themeInfo.map((info) => (
          <div className="theme-info-box" onClick={handleOpenModal}>
            <div className="theme-info-text">{info.title}</div>
            <div className="theme-info-content-text">{info.content}</div>
            <div className="theme-info-modify-text">수정</div>
          </div>
        ))}
      </div>
    </div>
  );
}
