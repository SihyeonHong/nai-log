interface PostTitleProps {
  children: React.ReactNode;
}

export default function PostTitle({ children }: PostTitleProps) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
