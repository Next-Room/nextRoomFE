import { useSnackBarWrite } from "@/components/atoms/snackBar.atom";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiClient } from "@/lib/reactQueryProvider";
import { ApiResponse, QueryConfigOptions } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useIsLoggedInValue } from "@/components/atoms/account.atom";

type Request = void;
export type Theme = {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
};

export type Themes = Theme[];

type Response = ApiResponse<Themes>;

const URL_PATH = `/v1/theme`;
export const QUERY_KEY = [URL_PATH];

export const getThemeList = async (config?: AxiosRequestConfig) => {
  const res = await apiClient.get<Request, AxiosResponse<Response>>(URL_PATH, {
    ...config,
    params: {
      ...config?.params,
    },
  });

  return res.data;
};

export const useGetThemeList = (configOptions?: QueryConfigOptions) => {
  const setSnackBar = useSnackBarWrite();
  const isLoggedIn = useIsLoggedInValue();

  const info = useQuery<Response, AxiosError, Themes>({
    queryKey: QUERY_KEY,
    queryFn: () => getThemeList(configOptions?.config),
    ...configOptions?.options,
    select: (res) => res.data,
    enabled: !!isLoggedIn,

    onError: (error: AxiosError) => {
      setSnackBar({
        isOpen: true,
        message: `${(error as any)?.response?.data?.message || error}`,
      });
    },
  });

  return info;
};
