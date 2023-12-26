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
  // const [isLoading, setIsLoading] = useState(true);
  const { data: categories = [] } = useGetThemeList();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const { userAgent } = window.navigator;
      // const mobileRegex =
      // /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
      // setIsMobile(mobileRegex.test(userAgent));
      setIsMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentTheme(categories.map(({ id, title }) => ({ id, title })));
    }
  }, [categories, setCurrentTheme]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push("/admin");
    }

    if (isLoggedIn && currentTheme.length > 0) {
      const lastTitle = encodeURIComponent(
        currentTheme[currentTheme.length - 1].title
      );
      router.push(`/admin?title=${lastTitle}`);
    }
  }, [isLoggedIn, currentTheme, router]);

  // if (isLoading) {
  //   // eslint-disable-next-line react/jsx-no-useless-fragment
  //   return <></>;
  // }

  if (isMobile) return <Mobile />;

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
