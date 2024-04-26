export default function HeadlineFlex(props: any) {
  return (
    <div className="bg-white max-w-lg mx-auto flex flex-col items-center">
      <div className="p-4 rounded-lg shadow-md bg-light-shades">
        <div className="text-main text-sm font-semibold uppercase mb-2 items-start">
          {props.category}
        </div>
        <div className="items-center">
          <img
            src={props.imgUrl}
            alt="Notícia"
            className="h-40 w-full rounded-lg object-cover mx-auto"
          />
          <h1 className="text-2xl font-bold mt-4 text-dark-accent">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}
