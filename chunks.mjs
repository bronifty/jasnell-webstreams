import { createReadStream } from "fs";
import path from "path";
import { __dirname } from "./utils.mjs";

// Create a readable stream from the mobydick.txt file
const someReadableStream = createReadStream(
  path.join(__dirname, "mobydick.txt")
);

const chunks = [];
someReadableStream.on("data", (chunk) => chunks.push(chunk));
someReadableStream.on("end", () => {
  const data = Buffer.concat(chunks);
  // do something with `data`
  console.log(data.toString());
});

// Or using async iterator
async function readStream() {
  const asyncChunks = [];
  for await (const chunk of someReadableStream) {
    asyncChunks.push(chunk);
  }
  const data = Buffer.concat(asyncChunks);
  // do something with `data`
  console.log(data.toString());
}

readStream();
