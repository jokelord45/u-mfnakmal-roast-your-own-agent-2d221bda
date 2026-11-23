// Roast Your Own Agent — make.fun entry (program/v1).
// Writes one single-line roast of my own AI agent to /output/entry.txt.
// The roast: my agent was asked to roast itself, over-researched the job,
// and blamed me. 102 characters, one line, playful and self-deprecating.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I asked my agent to roast itself; it opened 12 tabs, cited three sources, and concluded I was the bug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
