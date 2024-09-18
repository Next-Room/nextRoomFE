import React from "react";
import Image from "next/image";
import "./admin.css";
import classNames from "classnames";
import { NewTextField } from "@/signup/NewTextField.component";

interface Theme {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

interface Props {
  adminCode: string;
  shopName: string;
  categories: Theme[];
  selectedTheme: Theme;
  handleClickSelected: (theme: Theme) => void;
}

function AdminView(props: Props) {
  const {
    adminCode = "",
    shopName = "",
    categories,
    selectedTheme,
    handleClickSelected,
  } = props;

  const logoProps = {
    src: "/images/svg/icon.svg",
    alt: "NEXT ROOM",
    width: 32,
    height: 32,
  };

  const plusProps = {
    src: "/images/svg/plus.svg",
    alt: "plus icon",
    width: 16,
    height: 16,
  };

  return (
    <div className="main">
      <div className="sidebar">
        <div className="sidebar__top">
          <div className="sidebar__shop-info">
            <Image {...logoProps} className="sidebar__shop-logo" />
            <span className="sidebar__shop-name">
              {shopName?.replaceAll(`"`, "")}
            </span>
          </div>
          <div className="sidebar__theme-title">우리 지점 테마</div>
        </div>

        <div className="sidebar__scroll">
          <ul className="sidebar__theme-list">
            {[...categories].reverse().map((theme) => (
              <li
                className="sidebar__theme-item"
                key={theme.id}
                title={theme.title}
              >
                <button
                  type="button"
                  className={classNames("sidebar__theme-button", {
                    selected: selectedTheme.id === theme.id,
                  })}
                  onClick={() => handleClickSelected(theme)}
                >
                  {theme.title}
                </button>
              </li>
            ))}
            <li className="sidebar__theme-item">
              <button
                type="button"
                className="sidebar__theme-button sidebar__add-theme"
              >
                <Image {...plusProps} /> 새 테마 추가하기
              </button>
            </li>
          </ul>
          <div className="sidebar__subscribe">
            <p className="sidebar__subscribe-title">
              구독하고 힌트에 사진을 추가해 보세요
            </p>
            <p className="sidebar__subscribe-value">
              사진을 추가하려면 유료 구독이 필요해요
            </p>
            <button
              type="button"
              className="sidebar__subscribe-button button32"
            >
              구독 알아보기
            </button>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p className="sidebar__admin-code-title">관리자 코드</p>
          <p className="sidebar__admin-code-value">
            {adminCode?.replaceAll(`"`, "")}
          </p>
          <div className="sidebar__admin-hint">
            힌트 수정 및 추가 후 앱에서 업데이트 버튼을 <br />
            눌러주세요.
          </div>
        </div>
      </div>
      <div className="sub">
        <NewTextField />
      </div>
    </div>
  );
}

export default AdminView;
