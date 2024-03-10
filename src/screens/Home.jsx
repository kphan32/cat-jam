import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Cat Jam</h1>
      <div className="flex justify-center items-center gap-4">
        <Link to="/instruments">
          <img src= "/icons/start.svg"></img>
        </Link>
        <img src= "/icons/help.svg"></img>
      </div>
    </main>
  );
}
