import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    // server component이기 때문에 브라우저에 표시되지 않음
    return (
        <div>
            {/* 데이터를 받아오는 작업을 거치기 전에 즉각적으로 로딩되는 부분 */}
            <h1>Movie Detail Page</h1>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
