import React from "react";

export default function ThemeInfoHint() {
  return (
    <div className="theme-hint__container">
      <div className="theme-hint__title">
        <span>힌트</span>
        <button type="button">추가하기</button>
      </div>
      <div className="theme-hint__table">
        <div className="table-header">
          <div className="table-code">
            <span>힌트코드</span>
          </div>
          <div className="table-rate">
            <span>진행률</span>
          </div>
          <div className="table-hint">
            <span>힌트 내용</span>
          </div>
          <div className="table-answer">
            <span>정답 내용</span>
          </div>
        </div>
        <div className="table-content-box">
          <div>
            <div className="main-text">여기서 힌트를 추가해 보세요.</div>
            <div className="sub-text">아직 저장된 힌트가 없어요.</div>
            <button type="button">추가하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
