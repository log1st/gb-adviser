import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const iconsScss = String(
  await fs.readFile(
    path.resolve(__dirname, "../src/assets/fonts/icons/icons.scss"),
  ),
).matchAll(/\$icons-([\w-_]+):\s"\\(\w+)"/g);

const map = Object.fromEntries(
  Array.from(iconsScss).map((i) => [i[1], parseInt(i[2], 16)]),
);

await fs.writeFile(
  path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../src/elements/icon/iconNames.ts",
  ),
  [
    `export const iconsMap = ${JSON.stringify(map)} as const;`,
    `export const iconNames = Object.keys(iconsMap);`,
    "export type IconName = keyof typeof iconsMap",
  ].join("\n\n"),
);
