import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                ></iframe>
            ))}
        </div>
    );
}
