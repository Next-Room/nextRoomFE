"use client";

import "@/style/reset.css";
import { useRouter } from "next/navigation";
import { useIsLoggedIn } from "@/components/atoms/account.atom";
import { removeAccessToken } from "@/utils/localStorage";
import LandingView from "./LandingView";

function Landing() {
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();
  const router = useRouter();

  const handleLogout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
  };

  const handleSignUpBtn = () => {
    router.push(
      "/signup/?utm_source=landing&utm_medium=banner&utm_campaign=landing_pc"
    );
  };

  const handleLoginBtn = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isLoggedIn ? handleLogout() : router.push("/login");
  };
  const buttonProps = {
    type: "submit",
    variant: "contained",
  };
  const LoginLinkProps = {
    title: isLoggedIn ? "로그아웃" : "로그인",
    onClick: handleLoginBtn,
  };

  const SignUpLinkProps = {
    title: isLoggedIn ? "관리자 페이지로 가기" : "무료로 시작하기",
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
