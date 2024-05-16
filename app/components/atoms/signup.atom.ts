import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface SignUp {
  email: string;
  password: string;
  level: number;
}

const signUpState = atom<SignUp>({
  key: "signUpState",
  default: { email: "", level: 1, password: "" },
});

export const useSignUpState = () => useRecoilState(signUpState);
export const useSignUpValue = () => useRecoilValue(signUpState);
export const useSignUpWrite = () => useSetRecoilState(signUpState);

const asPathState = atom<string>({
  key: "asPathState",
  default: "",
});

export const useAsPathState = () => useRecoilState(asPathState);
export const useAsPathStateValue = () => useRecoilValue(asPathState);
export const useAsPathStateWrite = () => useSetRecoilState(asPathState);
