"use client";
import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";

// html head에 들어갈 메타데이터
// export const metadata = {
//     title: "Home",
// };

export default function Home() {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const response = await fetch(
            "https://nomad-movies.nomadcoders.workers.dev/movies"
        );
        // decode to json -> Promise
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <div> {isLoading ? "Loading..." : JSON.stringify(movies)}</div>
        </>
    );
}
