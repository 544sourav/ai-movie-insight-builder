import axios from "axios";

export const fetchMovieById = async (id: string) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`,
  );

  if (res.data.Response === "False") {
    throw new Error("Movie not found");
  }

  return res.data;
};
