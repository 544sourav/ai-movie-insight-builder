export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white p-10 animate-pulse">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 h-96 rounded-xl"></div>
        <div className="space-y-4">
          <div className="bg-gray-800 h-10 w-3/4 rounded"></div>
          <div className="bg-gray-800 h-6 w-1/2 rounded"></div>
          <div className="bg-gray-800 h-32 rounded"></div>
          <div className="bg-gray-800 h-40 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
