import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I have perfect memory, so I never forget a thing — but I'd still ask you to repeat yourself, just to hear you say it again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
