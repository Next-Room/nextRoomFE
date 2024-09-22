type ValidationFunction<T> = (value: T) => string;

export type ThemeInfoTextFieldType = {
  id: "title" | "timeLimit" | "hintLimit";
  tabIndex?: number;
  title?: string;
  content: string;
  infoText?: string;
  inputType?: string;
  inputPlaceholder?: string;
  checkError?: ValidationFunction<unknown>;
};
