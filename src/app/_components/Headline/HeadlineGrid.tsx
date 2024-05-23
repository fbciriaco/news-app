export default function HeadlineGrid(props: any) {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white">
      <div className="p-4 rounded-lg shadow-md grid grid-cols-1 gap-2 bg-light-shades">
        <div className="text-sm font-semibold text-light-accent mb-2 uppercase">
          {props.category}
        </div>
        <img
          src={props.imgUrl}
          alt="News"
          className="h-40 w-full object-cover rounded-lg mx-auto"
        />
        <div className="self-start">
          <h1 className="text-2xl font-bold text-dark-accent">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}
