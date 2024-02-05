// "use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
    title: "Home",
};

export const API_URL: string =
    "https://nomad-movies.nomadcoders.workers.dev/movies";

// 서버 사이드에서만 처리하고 클라이언트에는 노출되지 않는다.
async function getMovies() {
    // timer 사용하기
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

// export default function Home() {
//     const [movies, setMovies] = useState();
//     const [isLoading, setIsLoading] = useState(true);

//     const getMovies = async () => {
//         const response = await fetch(
//             "https://nomad-movies.nomadcoders.workers.dev/movies"
//         );
//         // decode to json -> Promise
//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         getMovies();
//     }, []);

//     return (
//         <>
//             <div> {isLoading ? "Loading..." : JSON.stringify(movies)}</div>
//         </>
//     );
// }

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
