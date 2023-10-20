import { Readable } from "node:stream";
import { getSomeSource } from "./utils.mjs";
const readable = new ReadableStream(getSomeSource()); // web stream
const nodeReadable = Readable.fromWeb(readable); // convert web stream to node stream
nodeReadable.on("data", console.log);

// async function asyncGetWebToNode(){
//   const chunks = [];
//   const reader = readable.getReader()
//   for (await chunk of readable) {
//     chunks.push(chunk);
//   }
//   const arrBuf = ArrayBuffer.concat(chunks);
//   console.log(arrBuf);

// }

// async function asyncGetWebToNode() {
//   const chunks = [];
//   const reader = readable.getReader();

//   while (true) {
//     const { value, done } = await reader.read();

//     if (done) {
//       break;
//     }

//     chunks.push(value);
//   }

//   const arrBuf = new Uint8Array(chunks.flat()).buffer;
//   console.log(arrBuf);
// }

// asyncGetWebToNode();
