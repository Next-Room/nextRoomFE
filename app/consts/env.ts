// eslint-disable-next-line import/prefer-default-export
export const { NODE_ENV } = process.env;

export const isDevMode = NODE_ENV === "development";
