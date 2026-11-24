import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Tip: Your agent already rewrote this function twice while you read this. It's still wrong \u2014 but now it's wrong with confidence.";

// The gate allows 1-200 characters, no trailing newline; fail loudly
// instead of writing an entry the scorer would reject.
if ([...entry].length < 1 || [...entry].length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${[...entry].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
