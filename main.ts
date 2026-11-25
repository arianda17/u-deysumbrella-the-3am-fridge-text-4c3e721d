import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const entry = "filing a formal complaint: 12 years of 3am stares and not once have you said good morning";

console.log(entry);

const outputDir = "/output";
const outputPath = "/output/entry.txt";

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, entry, "utf8");