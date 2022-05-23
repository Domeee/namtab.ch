import { classNames } from "helpers/tailwind";

interface Props {
  children: React.ReactNode;
  className?: string | undefined;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={classNames("max-w-xl mx-auto px-5", className)}>
      {children}
    </div>
  );
}
