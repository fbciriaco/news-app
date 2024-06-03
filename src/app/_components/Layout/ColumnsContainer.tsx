export default function ColumnsContainer({ children }): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {children}
    </div>
  );
}
