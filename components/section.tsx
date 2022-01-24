interface Props {}

export default function Section({ children }: React.PropsWithChildren<Props>) {
  return <div className="py-32">{children}</div>;
}
