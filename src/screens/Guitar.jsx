import { useEffect } from "react";

const CHORDS = [
  { name: "d_maj", key: "z" },
  { name: "a_maj", key: "x" },
  { name: "e_maj", key: "c" },
  { name: "a_min", key: "v" },
  { name: "e_min", key: "b" },
  { name: "d_min", key: "n" },
  { name: "g_maj", key: "m" },
  { name: "c_maj", key: "," },
];

export default function Guitar() {
  const playSound = (name) => () => {
    createjs.Sound.play(`guitar.${name}`);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const chord = CHORDS.find((chord) => chord.key === e.key);
      if (!chord) return;

      createjs.Sound.play(`guitar.${chord.name}`);
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <main className="p-8 flex flex-col justify-between items-center">
      <div className="h-[50vh] flex flex-col justify-center text-center">
        <p className="text-xl font-bold">cat pic here</p>
      </div>
      <div className="grid grid-cols-8 gap-2">
        {CHORDS.map((chord, i) => {
          const { name, key } = chord;

          return (
            <div
              key={name}
              className={`h-36 flex justify-center ${
                i % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <button
                onClick={playSound(name)}
                // className="w-24 h-24 bg-red-300"
              >
                <img src={`/icons/${key}.svg`} alt="z-button" />
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
