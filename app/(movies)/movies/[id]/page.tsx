export default function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    // server component이기 때문에 브라우저에 표시되지 않음
    console.log(id);
    return <h1>Movie {id}</h1>;
}
