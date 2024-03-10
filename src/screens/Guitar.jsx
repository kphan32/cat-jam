import { useEffect, useState } from "react";

const CHORDS = [
  { name: "d_maj", key: "z", label: "D" },
  { name: "a_maj", key: "x", label: "A" },
  { name: "e_maj", key: "c", label: "E" },
  { name: "a_min", key: "v", label: "Am" },
  { name: "e_min", key: "b", label: "Em" },
  { name: "d_min", key: "n", label: "Dm" },
  { name: "g_maj", key: "m", label: "G" },
  { name: "c_maj", key: ",", label: "C" },
];

export default function Guitar() {
  const playSound = (btn, name) => {
    createjs.Sound.play(`guitar.${name}`);

    setTimeout(() => btn.blur(), 200);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const chord = CHORDS.find((chord) => chord.key === e.key);
      if (!chord || e.repeat) return;

      const btn = document.getElementById(`${chord.name}-btn`);
      btn?.focus();
      btn?.click();
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
          const { name, key, label } = chord;

          return (
            <div
              key={name}
              className={`h-36 flex justify-center ${
                i % 2 === 0 ? "items-start" : "items-end"
              }`}
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
    </main>
  );
}
