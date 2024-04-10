import { useSignUpWrite } from "@/components/atoms/signup.atom";
import { apiClient } from "@/lib/reactQueryProvider";
import { QUERY_KEY } from "@/queries/getHintList";
import { ApiError, ApiResponse, MutationConfigOptions } from "@/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
  email: string;
}
interface SendMessageResponse {
  code: number;
  message: string;
}
type Response = ApiResponse<SendMessageResponse>;

const URL_PATH = `/v1/email/verification-requests`;
const MUTATION_KEY = [URL_PATH];

export const postSendMessage = async (req: Request) => {
  const res = await apiClient.post<Request, AxiosResponse<Response>>(
    URL_PATH,
    req
  );

  return res.data;
};

export const usePostSendMessage = (configOptions?: MutationConfigOptions) => {
  const queryClient = useQueryClient();
  const setSignUpState = useSignUpWrite();

  const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
    mutationKey: MUTATION_KEY,
    mutationFn: (req) => postSendMessage(req),
    ...configOptions?.options,
    onSuccess: (res, req) => {
      queryClient.invalidateQueries(QUERY_KEY);
      setSignUpState({ level: 2, email: req.email, password: "" });
      // console.log("성공 시 실행")
    },
    onSettled: () => {
      //   console.log("항상 실행");
    },
    onError: (error) => {
      console.log(error);

      // setSnackBar({
      //   isOpen: true,
      //   message: `${(error as any)?.response?.data?.message || error}`,
      // });
    },
  });

  return info;
};
