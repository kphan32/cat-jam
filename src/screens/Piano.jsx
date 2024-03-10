import { useEffect } from "react";
import { Link } from "react-router-dom";

const NOTES = [
  { name: "c_0", key: "z", label: "C" },
  { name: "c_0_sharp", key: "s", label: "C#" },
  { name: "d_0", key: "x", label: "D" },
  { name: "d_0_sharp", key: "d", label: "D#" },
  { name: "e_0", key: "c", label: "E" },
  { name: "f_0", key: "v", label: "F" },
  { name: "f_0_sharp", key: "g", label: "F#" },
  { name: "g_0", key: "b", label: "G" },
  { name: "g_0_sharp", key: "h", label: "G#" },
  { name: "a_0", key: "n", label: "A" },
  { name: "a_0_sharp", key: "j", label: "A#" },
  { name: "b_0", key: "m", label: "B" },
  { name: "c_1", key: ",", label: "C" },
];

export default function Piano() {
  const playSound = (btn, name) => {
    createjs.Sound.play(`piano.${name}`);

    setTimeout(() => btn.blur(), 200);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const note = NOTES.find((note) => note.key === e.key);
      if (!note || e.repeat) return;

      const btn = document.getElementById(`${note.name}-btn`);
      btn?.focus();
      btn?.click();
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <main className="h-screen p-8 flex flex-col justify-between">
      <div>
        <div className="flex justify-center text-center">
          <p className="text-xl font-bold">cat pic here</p>
        </div>
        <div>
          <div className="grid grid-cols-16 gap-2">
            <div className="col-span-1 h-0" />
            {NOTES.filter((note) => note.name.endsWith("_sharp"))
              .slice(0, 2)
              .map((note) => {
                const { name, key, label } = note;

                return (
                  <div key={name} className="col-span-2 flex justify-center">
                    <button
                      id={`${name}-btn`}
                      onClick={(e) => playSound(e.target, name)}
                      className="group outline-none"
                    >
                      <p className="font-semibold text-gray-600">{label}</p>
                      <img
                        src={`/icons/${key}.svg`}
                        alt="z-button"
                        className="group-active:hidden group-focus:hidden"
                      />
                      <img
                        src={`/icons/${key}_press.svg`}
                        alt="z-button"
                        className="hidden group-active:block group-focus:block"
                      />
                    </button>
                  </div>
                );
              })}
            <div className="col-span-2 h-0" />
            {NOTES.filter((note) => note.name.endsWith("_sharp"))
              .slice(2)
              .map((note) => {
                const { name, key, label } = note;

                return (
                  <div
                    key={name}
                    className="col-span-2 h-36 flex justify-center"
                  >
                    <button
                      id={`${name}-btn`}
                      onClick={(e) => playSound(e.target, name)}
                      className="group outline-none"
                    >
                      <p className="font-semibold text-gray-600">{label}</p>
                      <img
                        src={`/icons/${key}.svg`}
                        alt="z-button"
                        className="group-active:hidden group-focus:hidden"
                      />
                      <img
                        src={`/icons/${key}_press.svg`}
                        alt="z-button"
                        className="hidden group-active:block group-focus:block"
                      />
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="grid grid-cols-8 gap-2">
            {NOTES.filter((note) => !note.name.endsWith("_sharp")).map(
              (note) => {
                const { name, key, label } = note;

                return (
                  <div key={name} className="flex justify-center">
                    <button
                      id={`${name}-btn`}
                      onClick={(e) => playSound(e.target, name)}
                      className="group outline-none"
                    >
                      <p className="font-semibold text-gray-600">{label}</p>
                      <img
                        src={`/icons/${key}.svg`}
                        alt="z-button"
                        className="group-active:hidden group-focus:hidden"
                      />
                      <img
                        src={`/icons/${key}_press.svg`}
                        alt="z-button"
                        className="hidden group-active:block group-focus:block"
                      />
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <Link to="/instruments">
        <img src="/icons/back.svg" className="w-full aspect-auto" />
      </Link>
    </main>
  );
}
