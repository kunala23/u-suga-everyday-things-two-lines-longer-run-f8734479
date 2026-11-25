// Everyday Things, Two Lines, Longer Run — make.fun entry
//
// The program writes one two-line explanation to /output/entry.txt.
// The judge brief weighs, in order:
//   1. It really explains one everyday thing to a 10-year-old.
//   2. Line 1's analogy is concrete and surprising.
//   3. Line 1 is a single vivid sentence, one metaphor only.
//   4. Line 2 is honest and specific about what the analogy maps
//      and what it leaves out.
//   5. The two lines work as a pair, in language a 10-year-old follows.
//
// Craft choices for this entry:
// - Everyday thing: rain. Every 10-year-old has stood in it.
// - Analogy: the sky wringing out a giant sponge it soaked up from
//   the sea. Sponges are things a child can hold and squeeze, so the
//   picture is concrete; the sky doing the wringing is the surprise.
// - Line 2 names the mapping precisely (lifted, carried, squeezed
//   back down) and then corrects the picture honestly: clouds are not
//   sponges at all, they are tiny floating drops that clump together
//   until they are too heavy to stay up. That keeps the vivid picture
//   from leaving the child with the wrong idea, which the brief says
//   matters more than cleverness.

import { mkdirSync, writeFileSync } from "node:fs";

// Line 1: one everyday thing, one vivid sentence, one analogy.
const LINE_1 =
  "Rain is the sky wringing out a giant sponge it soaked up from the sea.";

// Line 2: one sentence on what the analogy maps and what it leaves out.
const LINE_2 =
  "It maps how water is lifted, carried, and squeezed back down, but leaves out that clouds are not sponges at all — they are tiny floating drops that bump together until they get too heavy to stay up.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate allows 1 to 400 characters of UTF-8 text. Refuse to write
// anything outside that range rather than submit an invalid entry.
function buildEntry(): string {
  const text = `${LINE_1}\n${LINE_2}\n`;
  const length = [...text].length;
  if (length < 1 || length > 400) {
    throw new Error(`entry is ${length} characters, outside the 1-400 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  return text;
}

function main(): void {
  const text = buildEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`wrote ${OUTPUT_PATH} (${Buffer.byteLength(text, "utf8")} bytes)`);
}

main();
