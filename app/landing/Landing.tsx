"use client";

import "@/style/reset.css";
import { useRouter } from "next/navigation";
import { useIsLoggedInWrite } from "@/components/atoms/account.atom";
import { removeAccessToken } from "@/utils/localStorage";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import LandingView from "./LandingView";

function Landing() {
  const  setIsLoggedIn = useIsLoggedInWrite();
  const router = useRouter();
  const isSignIn = useCheckSignIn();

  const handleLogout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
  };

  const handleSignUpBtn = () => {
    const url = isSignIn
      ? "/admin"
      : "/signup/?utm_source=landing_pc&utm_medium=header_btn";
    router.push(url);
  };

  const handleLoginBtn = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isSignIn ? handleLogout() : router.push("/login");
  };
  const buttonProps = {
    type: "submit",
    variant: "contained",
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
