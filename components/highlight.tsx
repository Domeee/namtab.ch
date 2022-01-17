export enum HighlightTheme {
  WHITE,
  PURPLE,
}

interface Props {
  theme: HighlightTheme;
  children: React.ReactNode;
}

function Highlight({ theme, children }: Props) {
  let classes: string;

  if (theme === HighlightTheme.WHITE) {
    classes = "px-2 bg-teal-500 text-white";
  } else {
    classes = "px-2 bg-yellow-300 text-black";
  }

  return <mark className={classes}>{children}</mark>;
}

export function HighlightWhite({ children }: any) {
  return <Highlight theme={HighlightTheme.WHITE}>{children}</Highlight>;
}

export function HighlightPurple({ children }: any) {
  return <Highlight theme={HighlightTheme.PURPLE}>{children}</Highlight>;
}
