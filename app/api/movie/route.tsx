import { NextRequest, NextResponse } from "next/server";
import { fetchMovieById } from "@/libs/omdb";
import { analyzeSentiment } from "@/libs/gemini";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || !/^tt\d{7,8}$/.test(id)) {
      return NextResponse.json(
        { error: "Invalid IMDb ID format (example: tt0133093)" },
        { status: 400 },
      );
    }

    const movie = await fetchMovieById(id);

    const sentiment = await analyzeSentiment(movie);

    return NextResponse.json({
      movie,
      sentiment,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An error occurred";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
