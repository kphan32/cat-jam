import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const playSound = (btn, name, click) => {
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
    <main className="h-screen p-8 flex flex-col justify-between">
      <div>
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-4xl font-bold">Guitar</p>
          <img src="/icons/guitar.svg" className="w-48" />
        </div>
        <div className="grid grid-cols-8 gap-2">
          {CHORDS.map((chord, i) => {
            const { name, key, label } = chord;

            return (
              <div
                key={name}
                className={`h-[150%] flex justify-center ${
                  i % 2 === 0 ? "items-start" : "items-end"
                }`}
              >
                <button
                  id={`${name}-btn`}
                  onTouchStart={(e) => playSound(e.target, name, false)}
                  onClick={(e) => playSound(e.target, name, true)}
                  className="group outline-none"
                >
                  <p className="font-semibold">{label}</p>
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
      </div>
      <Link
        to="/instruments"
        className="w-full flex justify-center items-center"
      >
        <img src="/icons/back.svg" className="h-24 aspect-auto" />
      </Link>
    </main>
  );
}
