interface Sentiment {
  summary: string;
  classification: string;
}

export default function SentimentCard({ sentiment }: { sentiment: Sentiment }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
      <h3 className="text-xl font-semibold mb-3">AI Summary</h3>

      <p className="mb-4 text-gray-300">{sentiment.summary}</p>

      <span
        className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md ${
          sentiment.classification === "Positive"
            ? "bg-green-500/20 text-green-400 border border-green-500/40"
            : sentiment.classification === "Mixed"
              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
              : "bg-red-500/20 text-red-400 border border-red-500/40"
        }`}
      >
        {sentiment.classification}
      </span>
    </div>
  );
}
