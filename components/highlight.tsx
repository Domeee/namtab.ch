interface Props {
  children: React.ReactNode;
}

export default function Hightlight({ children }: Props) {
  return <mark className="px-2 bg-teal-500 text-white">{children}</mark>;
}
