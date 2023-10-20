import {
  Readable
} from 'node:stream';
import {getSomeSource} from "./utils.mjs"; 
const readable = new ReadableStream(getSomeSource()); // web stream
const nodeReadable = Readable.fromWeb(readable); // convert web stream to node stream
nodeReadable.on('data', console.log); 