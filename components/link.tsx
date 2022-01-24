import A from "components/a";
import NLink, { LinkProps } from "next/link";

interface Props extends React.PropsWithChildren<LinkProps> {
  className?: string | undefined;
  styled?: boolean | undefined;
  external?: boolean | undefined;
}

export default function Link({
  className,
  styled,
  children,
  href,
  ...rest
}: Props) {
  return (
    <NLink href={href}>
      <A styled={styled} className={className} {...rest}>
        {children}
      </A>
    </NLink>
  );
}
