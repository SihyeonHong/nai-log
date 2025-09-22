interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="bg-tag-background text-tag-foreground cursor-default rounded-full px-3 py-1 text-sm">
      {children}
    </span>
  );
}
