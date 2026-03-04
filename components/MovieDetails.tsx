import SentimentCard from "./SentimentCard";
import Link from "next/link";
export default function MovieDetails({
  movie,
  sentiment,
}: {
  movie: any;
  sentiment: any;
}) {
  const castList = movie.Actors?.split(",") || [];
  const ratings = movie.Ratings || [];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-10">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-white transition mb-6 inline-block"
      >
        ← Back to Search
      </Link>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Poster */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
            alt={movie.Title}
            className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {movie.Title}
            </h2>
            <p className="text-gray-400 mt-2">
              {movie.Year} • {movie.Rated} • {movie.Runtime}
            </p>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/40">
              ⭐ IMDb {movie.imdbRating}
            </span>

            {ratings.map((r: any, index: number) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700 text-sm"
              >
                {r.Source}: {r.Value}
              </span>
            ))}
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Genre</p>
              <p>{movie.Genre}</p>
            </div>

            <div>
              <p className="text-gray-500">Director</p>
              <p>{movie.Director}</p>
            </div>

            <div>
              <p className="text-gray-500">Box Office</p>
              <p>{movie.BoxOffice !== "N/A" ? movie.BoxOffice : "—"}</p>
            </div>

            <div>
              <p className="text-gray-500">Awards</p>
              <p>{movie.Awards}</p>
            </div>

            <div>
              <p className="text-gray-500">IMDb Votes</p>
              <p>{movie.imdbVotes}</p>
            </div>

            <div>
              <p className="text-gray-500">Language</p>
              <p>{movie.Language}</p>
            </div>
          </div>

          {/* Plot */}
          <div>
            <p className="text-gray-500 mb-2">Plot</p>
            <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
          </div>

          {/* Cast */}
          <div>
            <p className="text-gray-500 mb-3">Cast</p>
            <div className="flex flex-wrap gap-2">
              {castList.map((actor: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition"
                >
                  {actor.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* AI Sentiment */}
          <SentimentCard sentiment={sentiment} />
        </div>
      </div>
    </div>
  );
}
