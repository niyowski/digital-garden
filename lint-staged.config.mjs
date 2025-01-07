import path from "node:path";

const buildEslintCommand = (filenames) =>
  `next lint --max-warnings=0 --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  "**/*": "prettier --write --ignore-unknown --list-different",
  "**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.{ts,tsx}": [
    'bash -c "tsc --noEmit"',
    "jest --bail --findRelatedTests --passWithNoTests",
  ],
};
