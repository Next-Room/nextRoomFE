import { AxiosError, AxiosResponse } from "axios";
import { getAnalytics, logEvent } from "firebase/analytics";

import { apiClient } from "@/lib/reactQueryProvider";
import { QUERY_KEY } from "@/queries/getHintList";

import { useSignUpState } from "@/components/atoms/signup.atom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { ApiError, ApiResponse, MutationConfigOptions } from "@/types";

interface Request {
  email: string;
  password: string;
  name: string;
  isNotOpened: boolean;
  type: number;
}
interface SignUpResponse {
  code: number;
  message: string;
}
type Response = ApiResponse<SignUpResponse>;

const URL_PATH = `/v1/auth/signup`;
const MUTATION_KEY = [URL_PATH];

let requests: Request = {} as Request;

export const postSignUp = async (req: Request) => {
  requests = { ...req };
  const res = await apiClient.post<Request, AxiosResponse<Response>>(
    URL_PATH,
    req
  );

  return res.data;
};

export const usePostSignUp = (configOptions?: MutationConfigOptions) => {
  const analytics = getAnalytics();
  const queryClient = useQueryClient();
  const [signUpState, setSignUpState] = useSignUpState();

  const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
    mutationKey: MUTATION_KEY,
    mutationFn: (req) => postSignUp(req),
    ...configOptions?.options,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
      setSignUpState({ ...signUpState, level: 5 });
      logEvent(analytics, "WEB_join_join", {
        email: requests?.email,
        name: requests?.name,
      });
      requests = {} as Request;
    },
    onError: console.error,
  });

  return info;
};
