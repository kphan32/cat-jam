import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-green">
      <h1 className="text-8xl text-white">Cat Jam</h1>
      <div className="p-4 grid grid-rows-2 gap-4">
        <Link to="/instruments">
          <img src="/icons/start.svg"></img>
        </Link>
        <img src="/icons/help.svg"></img>
      </div>
    </main>
  );
}
