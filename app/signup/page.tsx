"use client";

import React, { useEffect } from "react";
import { useSignUpValue } from "@/components/atoms/signup.atom";
import SignUp from "./SignUp";
import EmailAuth from "./EmailAuth";
import Password from "./Password";
import StoreInfo from "./StoreInfo";
import SignUpSuccess from "./SignUpSuccess";

function HomePage() {
  const signUpstate = useSignUpValue();

  switch (signUpstate.level) {
    case 6:
      return <SignUp />;
    case 2:
      return <EmailAuth />;
    case 3:
      return <Password />;
    case 4:
      return <StoreInfo />;
    case 5:
      return <Password />;
    case 1:
      return <SignUpSuccess />;
    default:
      return <SignUp />;
  }
}
export default HomePage;
