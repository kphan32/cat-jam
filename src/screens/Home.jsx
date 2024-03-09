export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Cat Jam</h1>
      <div className="flex justify-center items-center gap-4">
        <button className="w-64 h-32 bg-blue-500">START</button>
        <button className="w-64 h-32 bg-red-500">START</button>
      </div>
    </main>
  );
}
