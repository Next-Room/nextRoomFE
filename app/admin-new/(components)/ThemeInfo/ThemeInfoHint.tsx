import React from "react";

export default function ThemeInfoHint() {
  const isHints = false;
  return (
    <div className="theme-hint__container">
      <div className="theme-hint__title">
        <span>힌트</span>
        <button className="secondary_button40" type="button">
          추가하기
        </button>
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
        {isHints ? (
          <ul className="table-content-box">
            <li className="table-content-element-box table-header">
              <div className="table-code">
                <div className="code">0001</div>
              </div>
              <div className="table-rate">
                <div className="rate">2%</div>
              </div>
              <div className="table-hint">
                <div className="hint-content">
                  달력에 있는 숫자들을 조합해 보세요.
                </div>
                <div className="hint-images">
                  <div className="hint-image-box">
                    <div className="hint-image" />
                  </div>
                  <div className="hint-image-box">
                    <div className="hint-image" />
                  </div>
                </div>
              </div>
              <div className="table-answer">
                <div className="hint-content">2812</div>
                <div className="hint-images">
                  <div className="hint-image-box">
                    <div className="hint-image" />
                  </div>
                </div>
              </div>
            </li>
            <li className="table-content-element-box table-header">
              <div className="table-code">
                <div className="code">0001</div>
              </div>
              <div className="table-rate">
                <div className="rate">2%</div>
              </div>
              <div className="table-hint">
                <div className="hint-content">
                  달력에 있는 숫자들을 조합해 보세요.달력에 있는 숫자들을 조합해
                  보세요.달력에 있는 숫자들을 조합해 보세요.달력에 있는 숫자들을
                  조합해 보세요.달력에 있는 숫자들을 조합해 보세요.달력에 있는
                  숫자들을 조합해 보세요.달력에 있는 숫자들을 조합해
                  보세요.달력에 있는 숫자들을 조합해 보세요.달력에 있는 숫자들을
                  조합해 보세요.달력에 있는 숫자들을 조합해 보세요.
                </div>
              </div>
              <div className="table-answer">
                <div className="hint-content">2812</div>
                <div className="hint-images">
                  <div className="hint-image-box">
                    <div className="hint-image" />
                  </div>
                  <div className="hint-image-box">
                    <div className="hint-image" />
                  </div>
                  <div className="hint-image-box">
                    <div className="hint-image" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <div className="table-content-box__none-hint">
            <div className="main-text">여기서 힌트를 추가해 보세요.</div>
            <div className="sub-text">아직 저장된 힌트가 없어요.</div>
            <button className="button40" type="button">
              추가하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
