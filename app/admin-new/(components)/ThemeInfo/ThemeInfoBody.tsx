import React from "react";

export default function ThemeInfoBody() {
  return (
    <div className="theme-info__body">
      <div className="theme-info-text">테마 정보</div>
      <div className="theme-info-container">
        <div className="theme-info-box">
          <div className="theme-info-text">탈출 제한 시간</div>
          <div className="theme-info-content-text">Time분</div>
        </div>
        <div className="theme-info-box">
          <div className="theme-info-text">사용 가능한 힌트</div>
          <div className="theme-info-content-text">Hint개</div>
        </div>
      </div>
    </div>
  );
}
