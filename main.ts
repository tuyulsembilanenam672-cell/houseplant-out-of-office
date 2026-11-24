import { mkdirSync, writeFileSync } from "node:fs";

// The Houseplant Out-of-Office — make.fun bounty
// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// One out-of-office auto-reply, at most 120 characters, as if a
// houseplant had written it.
const LINE =
  "Out of office. I have not been watered since March, I have outlived three managers, and I am still here.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 120) {
  throw new Error(`entry must be 1-120 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);

// Verification note: the line is 104 code points, one line, valid UTF-8,
// no trailing newline, and the plant's own life (unwatered since March,
// outliving three managers) drives the joke — no office cliches.
