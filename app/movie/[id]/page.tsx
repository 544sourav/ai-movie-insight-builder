"use client";

import { useEffect, useState } from "react";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ErrorState from "@/components/ErrorState";
import MovieDetails from "@/components/MovieDetails";

export default function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.id;

        const res = await fetch(`/api/movie?id=${id}`);
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error);
        }

        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [params]);

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState message={error} />;

  return <MovieDetails movie={data.movie} sentiment={data.sentiment} />;
}
