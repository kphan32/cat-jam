import { useEffect } from "react";

const NOTES = [
  { name: "c_0", key: "z" },
  { name: "c_0_sharp", key: "s" },
  { name: "d_0", key: "x" },
  { name: "d_0_sharp", key: "d" },
  { name: "e_0", key: "c" },
  { name: "f_0", key: "v" },
  { name: "f_0_sharp", key: "g" },
  { name: "g_0", key: "b" },
  { name: "g_0_sharp", key: "h" },
  { name: "a_0", key: "n" },
  { name: "a_0_sharp", key: "j" },
  { name: "b_0", key: "m" },
  { name: "c_1", key: "," },
];

export default function Piano() {
  const playSound = (name) => () => {
    createjs.Sound.play(`piano.${name}`);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const note = NOTES.find((note) => note.key === e.key);
      if (!note) return;

      createjs.Sound.play(`piano.${note.name}`);
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <main>
      {NOTES.map((note) => {
        const { name, key } = note;

        return (
          <button key={name} onClick={playSound(name)}>
            {key}
          </button>
        );
      })}
    </main>
  );
}
