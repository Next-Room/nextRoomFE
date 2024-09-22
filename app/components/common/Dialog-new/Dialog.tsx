import React from "react";
import ModalPortal from "./ModalPortal";
import Image from "next/image";
import { deleteProps, xProps } from "@/admin-new/(consts)/sidebar";
// import "@/style/_button.css";
export default function Dialog() {
  return (
    <ModalPortal>
      <div className="theme-info-modal">
        <div className="theme-info-modal__header">
          <h2>테마 정보 수정</h2>
          <button className="close-button">
            <Image {...xProps} />
          </button>
        </div>
        {/* <div className="theme-info-modal__content">
          <div className="theme-name">
            <input
              type="text"
              value="개발자의 이중생활"
              placeholder="테마 이름"
            />
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
        </div> */}

        <div className="theme-info-modal__footer">
          <button className="delete-button icon_button32">
            <Image {...deleteProps} />
            테마 삭제하기
          </button>
          <div className="action-buttons">
            <button className="cancel outline_button32">취소</button>
            <button className="button32">저장</button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
