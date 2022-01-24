import { classNames } from "helpers/tailwind";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  styled?: boolean | undefined;
  external?: boolean | undefined;
}

export default function A({
  className,
  styled,
  children,
  external,
  ...rest
}: Props) {
  const classes = styled
    ? classNames(
        "bg-no-repeat bg-gradient-to-r from-yellow-300 to-yellow-300 bg-[left_top_1rem] transition-all",
        className
      )
    : className;
  const externalAttrs = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <a className={classes} {...externalAttrs} {...rest}>
      {children}
    </a>
  );
}
