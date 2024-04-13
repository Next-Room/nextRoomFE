"use client";

import React, { ReactNode, useEffect, useMemo, useState } from "react";

import { useGetThemeList } from "@/queries/getThemeList";
import { useCurrentTheme } from "@/components/atoms/currentTheme.atom";
import { useRouter, usePathname } from "next/navigation";
import { useIsLoggedInValue } from "@/components/atoms/account.atom";

import * as S from "@/home/HomeView.styled";

import Header from "@/components/common/Header/Header";
import MainDrawer from "@/components/common/Drawer/Drawer";
import Mobile from "../Mobile/Mobile";
import { useModalStateValue } from "../atoms/modals.atom";

interface RequireAuthProps {
  children: ReactNode;
}
function RequireAuth({
  children,
}: RequireAuthProps): React.ReactElement | null {
  const isLoggedIn = useIsLoggedInValue();
  const [currentTheme, setCurrentTheme] = useCurrentTheme();
  const router = useRouter();
  const pathname = usePathname();
  const allowUnauthPaths = useMemo(() => ["/", "/trial", "/signup"], []);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data: categories = [] } = useGetThemeList();
  const modalState = useModalStateValue();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { userAgent } = window.navigator;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
      setIsMobile(mobileRegex.test(userAgent));
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentTheme(categories.map(({ id, title }) => ({ id, title })));
    }
  }, [categories, setCurrentTheme]);

  useEffect(() => {
    if (!isLoggedIn && !allowUnauthPaths.includes(pathname)) {
      router.push("/login");
    } else if (isLoggedIn && !modalState.isOpen) {
      if (currentTheme.length > 0) {
        const lastTitle = encodeURIComponent(
          currentTheme[currentTheme.length - 1].title
        );
        router.push(`/admin?title=${lastTitle}`);
      } else {
        router.push("/admin");
      }
    }
  }, [
    isLoggedIn,
    currentTheme,
    router,
    allowUnauthPaths,
    pathname,
    modalState,
  ]);

  if (isLoading) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  if (isMobile && !allowUnauthPaths.includes(pathname)) return <Mobile />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!isLoggedIn) return <>{children}</>;

  return (
    <S.Wrapper>
      <MainDrawer {...{ categories }} />
      <S.Cont component="main">
        <Header />
        {children}
      </S.Cont>
    </S.Wrapper>
  );
}

export default RequireAuth;
