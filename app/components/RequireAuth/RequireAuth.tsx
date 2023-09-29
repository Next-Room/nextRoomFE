"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "@/components/common/Header/Header";
import { useGetThemeList } from "@/queries/getThemeList";
import { useCurrentTheme } from "@/components/atoms/currentTheme.atom";
import { useRouter } from "next/navigation";
import * as S from "@/home/HomeView.styled";
import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import MainDrawer from "@/components/common/Drawer/Drawer";
import Mobile from "../Mobile/Mobile";

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({
  children,
}: RequireAuthProps): React.ReactElement | null {
  const isLoggedIn = useIsLoggedInValue();
  const [currentTheme, setCurrentTheme] = useCurrentTheme();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const { data: categories = [] } = useGetThemeList();
  const props = { categories };

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentTheme(
        categories.map((obj) => ({
          id: obj.id,
          title: obj.title,
        }))
      );
    }
  }, [categories, setCurrentTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.navigator.userAgent.match(/Android/i) ||
        window.navigator.userAgent.match(/webOS/i) ||
        window.navigator.userAgent.match(/iPhone/i) ||
        window.navigator.userAgent.match(/iPad/i) ||
        window.navigator.userAgent.match(/iPod/i) ||
        window.navigator.userAgent.match(/BlackBerry/i) ||
        window.navigator.userAgent.match(/Windows Phone/i)
      ) {
        setIsMobile(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && currentTheme.length > 0) {
      router.push(
        `/home?title=${encodeURIComponent(
          currentTheme[currentTheme.length - 1].title
        )}`
      );
    }
  }, [isLoggedIn, currentTheme, router]);

  if (isLoggedIn) {
    return (
      <S.Wrapper>
        <MainDrawer {...props} />
        <S.Cont component="main">
          <Header />
          {children}
        </S.Cont>
      </S.Wrapper>
    );
  }

  if (isMobile) return <Mobile />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default RequireAuth;
