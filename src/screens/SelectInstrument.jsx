import { Link } from "react-router-dom";

export default function SelectInstrument() {
  return (
    <main className="h-screen p-4 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Select Instrument</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <Link to="/guitar">
          <button className="w-full h-48 bg-red-400">GUITAR</button>
        </Link>
        <Link to="/piano">
          <button className="w-full h-48 bg-green-400">PIANO</button>
        </Link>
        <Link to="/drumset">
          <button className="w-full h-48 bg-blue-400">DRUMSET</button>
        </Link>
      </div>
      <Link to="/" className="w-full">
        <button className="w-full h-12 bg-gray-400">BACK</button>
      </Link>
    </main>
  );
}
