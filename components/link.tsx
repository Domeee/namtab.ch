import { classNames } from "helpers/tailwind";
import NLink, { LinkProps } from "next/link";

interface Props extends React.PropsWithChildren<LinkProps> {
  className?: string | undefined;
  styled?: boolean | undefined;
}

export default function Link({ className, styled, children, ...rest }: Props) {
  const classes = styled
    ? classNames(
        "bg-no-repeat bg-gradient-to-r from-yellow-300 to-yellow-300 bg-[left_top_1rem] transition-all cursor-pointer",
        className
      )
    : className;
  return (
    <NLink {...rest}>
      <a className={classes}>{children}</a>
    </NLink>
  );
}
