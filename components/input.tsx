import { ReactNode } from "react";

type InputProps = (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
  name: string;
  type: string;
  value?: string | ReadonlyArray<string> | number | undefined;
  required?: boolean;
};

export default function Input({ name, type, value, ...rest }: InputProps) {
  let inputElement: ReactNode;
  const defaultInputAttrs = {
    name: name,
    id: name,
    className:
      "block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-300 focus:border-yellow-300 border-gray-300 rounded-md",
  };

  if (type === "textarea") {
    inputElement = (
      <textarea
        rows={4}
        {...defaultInputAttrs}
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  } else {
    inputElement = (
      <input
        value={value}
        type={type}
        {...defaultInputAttrs}
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }

  return <>{inputElement}</>;
}
