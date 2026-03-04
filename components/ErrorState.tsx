export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-red-500 text-lg">
      {message}
    </div>
  );
}
