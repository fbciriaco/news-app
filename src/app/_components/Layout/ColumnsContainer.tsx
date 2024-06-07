export default function ColumnsContainer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {children}
    </section>
  );
}
