export const { NODE_ENV } = process.env;

export const isDevMode =
  NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_APP_ENVIRONMENT === "develop";
