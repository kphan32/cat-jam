import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Cat Jam</h1>
      <div className="flex justify-center items-center gap-4">
        <Link to="/instruments">
          <button className="w-64 h-32 bg-red-400">START</button>
        </Link>
        <button className="w-64 h-32 bg-blue-400">HELP</button>
      </div>
    </main>
  );
}
