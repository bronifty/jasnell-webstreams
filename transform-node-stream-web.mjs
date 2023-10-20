import { ReadableStream, WritableStream, TransformStream } from 'node:stream/web';
import {getSomeSource, getSomeSink, getSomeTransform} from "./utils.mjs";

(async () => {
  const readable = new ReadableStream(getSomeSource());
  const writable = new WritableStream(getSomeSink());
  const transform = new TransformStream(getSomeTransform());
  await readable.pipeThrough(transform).pipeTo(writable);
})();
