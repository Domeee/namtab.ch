interface Props {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function Button({ title, type }: Props) {
  return (
    <button
      type={type || "button"}
      className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
    >
      {title}
    </button>
  );
}
