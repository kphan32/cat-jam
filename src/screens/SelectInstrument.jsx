import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function SelectInstrument() {
  return (
    <main className="h-screen p-8 flex flex-col justify-center items-center gap-4 bg-green">
      <h1 className="text-4xl sm:text-6xl text-white">Select Instrument</h1>
      {/* wait hi can we resize the icons to make it slightly smaller? */}
      <div className="grid grid-cols-3 gap-4 w-128 h-128">
        <Link to="/guitar">
          <img src="icons/guitar.svg"></img>
        </Link>
        <Link to="/piano">
          <img src="icons/piano.svg"></img>
        </Link>
        <Link
          onClick={() => toast.error("sorry we didn't have enough time lol")}
        >
          <img src="icons/drums.svg"></img>
        </Link>
      </div>
      <Link to="/" className="justify-center">
        <img src="icons/back.svg"></img>
      </Link>
    </main>
  );
}
