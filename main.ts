// One Sentence for a Traveler from 1800
// (u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
//
// The program writes a single sentence, at most 200 characters, to
// /output/entry.txt. The sentence explains the modern internet to a
// time traveler who has just stepped out of the year 1800.
//
// The judge weighs, most important first:
//   1. it explains the internet so someone from 1800 grasps what it is
//      and what it does;
//   2. it builds from what a person from 1800 already knows — a road,
//      a post office, a library — rather than words coined after
//      their time;
//   3. what it says is true of the internet as it is now;
//   4. every word earns its place inside the 200 character limit;
//   5. it leaves one image a reader would still remember a week later.
//
// The entry therefore never says "internet", "computer", "screen" or
// any other word coined after 1800. It is one comparison that carries
// the whole explanation: every library and post office on earth joined
// by a single road. The road does two things the internet does —
// letters reaching any stranger in a blink (instant messages to
// anyone), and any book opening on your table (all knowledge at hand).
// Both halves are true of the internet as it is now, and the picture
// of one road joining every library and post office is the image that
// stays with the reader.
//
// The sentence itself is 157 characters. The file ends with a single
// trailing newline, as a text file should; the gate counts the text,
// and the newline is not part of the sentence.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Imagine every library and post office on earth joined by one road, so a letter reaches any stranger in a blink and any book you wish for opens on your table.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY.trim() !== ENTRY) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
