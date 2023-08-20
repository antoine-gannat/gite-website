const fs = require("fs");
const path = require("path");

const banList = ["node_modules", ".git", ".next", ".tooling"];

// get all .tsx files recursively from the root folder
const getFiles = (dir, result) => {
  result = result || [];
  if (banList.some((banned) => dir.includes(banned))) {
    return result;
  }
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, result);
    } else if (name.match(/\.tsx$/)) {
      result.push(name);
    }
  }
  return result;
};

const extractStrings = (file) => {
  const fileContents = fs.readFileSync(file, "utf8");
  const regex = /strings\.([a-zA-Z]+)/gm;
  const matches = fileContents.match(regex);
  return (matches || []).map((match) => match.replace("strings.", ""));
};

const filesOfInterest = getFiles(path.join(__dirname, ".."));

let strings = [];
filesOfInterest.forEach(
  (file) => (strings = [...strings, ...extractStrings(file)])
);
// filter out duplicates

strings = [...new Set(strings)];

const content = `// This file is generated automatically by extractStrings.js
// Do not edit this file manually

export type ILocalizedStrings = Record<Strings, string> &
  Record<string, string>;

export type Locale = "en" | "fr";


export type Strings = ${strings.map((string) => `"${string}"`).join(" | ")};
`;

fs.writeFileSync(
  path.join(
    __dirname,
    "..",
    "utils",
    "localization",
    "strings.types.generated.ts"
  ),
  content
);
