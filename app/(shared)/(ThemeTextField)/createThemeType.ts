type ValidationFunction<T> = (value: T) => string;

export type ThemeInfoTextFieldType = {
  id?: string;
  title?: string;
  content?: string | undefined;
  infoText?: string | undefined;
  inputType?: string | undefined;
  inputPlaceholder?: string | undefined;
  checkError?: ValidationFunction<unknown> | undefined;
  validReg?: string | undefined;
};
