import React from "react";

export default function DialogBody() {
  return (
    <div className="theme-info-modal__content">
      <div className="theme-name">
        <input type="text" value="개발자의 이중생활" placeholder="테마 이름" />
      </div>

      <div className="info-grid">
        <div className="info-item">
          <div className="label">탈출 제한 시간(분)</div>
          <div className="value">
            <input type="number" value="60" />
          </div>
        </div>
        <div className="info-item">
          <div className="label">사용 가능 힌트 수</div>
          <div className="value">
            <input type="number" value="5" />
          </div>
        </div>
      </div>
    </div>
  );
}
