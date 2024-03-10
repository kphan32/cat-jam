const GUITAR_SOUNDS = [
  "d_maj",
  "a_maj",
  "e_maj",
  "a_min",
  "e_min",
  "d_min",
  "g_maj",
  "c_maj",
];

const PIANO_SOUNDS = [
  "c_0",
  "c_0_sharp",
  "d_0",
  "d_0_sharp",
  "e_0",
  "f_0",
  "f_0_sharp",
  "g_0",
  "g_0_sharp",
  "a_0",
  "a_0_sharp",
  "b_0",
  "c_1",
];

export function loadSounds() {
  console.log("loading sounds");

  for (let sound of GUITAR_SOUNDS) {
    createjs.Sound.registerSound(
      `/sounds/guitar/${sound}.mp3`,
      `guitar.${sound}`
    );
  }

  for (let sound of PIANO_SOUNDS) {
    createjs.Sound.registerSound(
      `/sounds/piano/${sound}.mp3`,
      `piano.${sound}`
    );
  }
}
