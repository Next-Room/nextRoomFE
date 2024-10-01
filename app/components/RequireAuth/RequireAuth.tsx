"use client";

import React, { ReactNode, useEffect, useMemo, useState } from "react";

import { useGetThemeList } from "@/queries/getThemeList";
import {
  useCurrentTheme,
  useCurrentThemeReset,
} from "@/components/atoms/currentTheme.atom";
import { useModalStateValue } from "@/components/atoms/modalState.atom";
import {
  useSelectedThemeReset,
  useSelectedThemeValue,
} from "@/components/atoms/selectedTheme.atom";
import { useRouter, usePathname } from "next/navigation";
import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import * as S from "@/home/HomeView.styled";
import Header from "@/components/common/Header/Header";
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
  const resetCurrentTheme = useCurrentThemeReset();
  const resetSelectedTheme = useSelectedThemeReset();

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
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentTheme(categories.map(({ id, title }) => ({ id, title })));
    } else {
      resetCurrentTheme();
      resetSelectedTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, setCurrentTheme]);
  const selectedTheme = useSelectedThemeValue();
  useEffect(() => {
    if (!isLoggedIn && !allowUnauthPaths.includes(pathname)) {
      router.push("/login");
    } else if (isLoggedIn && pathname === "/") {
      router.push(pathname);
    } else if (isLoggedIn && currentTheme.length === 0) {
      router.push("/admin-new");
    } else if (isLoggedIn && !modalState.isOpen) {
      if (currentTheme.length > 0) {
        const lastThemeId = encodeURIComponent(
          currentTheme[currentTheme.length - 1].id
        );
        // router.push(
        //   selectedTheme.id === 0
        //     ? `/admin-new?themeId=${lastThemeId}`
        //     : `/admin-new?themeId=${selectedTheme.id}`
        // );
        // router.push(`/admin-new`);
      } else {
        router.push("/admin-new");
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
  console.log(pathname);

  if (isLoading) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  if (isMobile && !allowUnauthPaths.includes(pathname)) return <Mobile />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!isLoggedIn) return <>{children}</>;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (isLoggedIn && (pathname === "/" || "/admin-new")) return <>{children}</>;

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
