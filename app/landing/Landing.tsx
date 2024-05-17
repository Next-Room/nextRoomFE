"use client";

import "@/style/reset.css";
import { useRouter, usePathname } from "next/navigation";
import { useIsLoggedInWrite } from "@/components/atoms/account.atom";
import { removeAccessToken } from "@/utils/localStorage";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import { setCookie } from "@/utils/cookie";

import LandingView from "./LandingView";

function Landing() {
  const setIsLoggedIn = useIsLoggedInWrite();
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  const isSignIn = useCheckSignIn();
  const handleLogout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
  };

  // document.cookie = `pathName =${pathName}`;
  const handleSignUpBtn = () => {
    const url = isSignIn
      ? "/admin"
      : "/signup/?utm_source=landing_pc&utm_medium=header_btn";
    setCookie(pathName);
    router.push(url);
  };

  const handleLoginBtn = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isSignIn ? handleLogout() : router.push("/login");
  };
  const buttonProps = {
    type: "button",
    variant: "contained",
    onClick: handleSignUpBtn,
  };
  const LoginLinkProps = {
    title: isSignIn ? "로그아웃" : "로그인",
    onClick: handleLoginBtn,
  };

  const SignUpLinkProps = {
    title: isSignIn ? "관리자 페이지로 가기" : "무료로 시작하기",
    onClick: handleSignUpBtn,
  };

  const LandingViewProps = {
    buttonProps,
    LoginLinkProps,
    SignUpLinkProps,
  };

  return <LandingView {...LandingViewProps} />;
}

export default Landing;
