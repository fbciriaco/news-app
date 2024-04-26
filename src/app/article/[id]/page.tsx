export default function ArticlePage({ params }: { params: { id: string } }) {
  return <div>My article: {params.id}</div>;
}
