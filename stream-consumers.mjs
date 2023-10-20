import { arrayBuffer, blob, json, text } from "stream-consumers";
import { get } from "https";
import path from "path";
import { createReadStream } from "fs";
import { __dirname } from "./utils.mjs";

// read the image file
const readable = createReadStream(path.join(__dirname, "wing.png"));
const data = await arrayBuffer(readable);
console.log(data);

// reading json from https endpoint (does not work locally)
const url = "https://rickandmortyapi.com/api/character/639";
get(url, async (response) => {
  const data = await json(response);
  console.log(data);
});

// read the same file locally
import { readFile } from "fs/promises";
const filePath = path.join(__dirname, "./rick-morty.json");
readFile(filePath, "utf8")
  .then((data) => {
    const json = JSON.parse(data);
    console.log(json);
  })
  .catch((error) => {
    console.error(`Error reading file from disk: ${error}`);
  });

// read from text
// const input = await text("yes hello this is dog");
const input = await text(process.stdin); // cat mobydick.txt | node stream-consumers.mjs
console.log(input); // this will hang if there is no stdin
