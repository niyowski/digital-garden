import { FlatCompat } from "@eslint/eslintrc";
import configPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";
import pluginJestDom from "eslint-plugin-jest-dom";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginTestingLibrary from "eslint-plugin-testing-library";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  //#region simple-import-sort
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  //#endregion
  //#region unused-imports
  {
    plugins: {
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  //#endregion
  //#region jest
  {
    files: ["test/**/*.{ts,tsx}", "src/**/*.spec.{ts,tsx}"],
    ...pluginJest.configs["flat/all"],
    ...pluginJestDom.configs["flat/all"],
    ...pluginTestingLibrary.configs["flat/dom"],
    // TODO: Consider adding the following plugins once they are compatible with
    // the latest ESLint version or the flat config:
    // https://github.com/jest-community/eslint-plugin-jest-extended
    // https://github.com/dangreenisrael/eslint-plugin-jest-formatting
    // https://github.com/istanbuljs/eslint-plugin-istanbul
    // https://github.com/funbox/eslint-plugin-no-only-tests
  },
  //#endregion
  configPrettier,
];

export default eslintConfig;
