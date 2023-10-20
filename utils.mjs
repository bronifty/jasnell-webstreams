import { ReadableStream } from "node:stream/web";

export const __dirname = new URL(".", import.meta.url).pathname;

export async function getReadableStreamSomehow() {
  return new Promise.resolve(
    ReadableStream({
      start(controller) {
        setInterval(() => {
          controller.enqueue(Math.random());
        }, 1000);
      },
    })
  );
}

export function getSomeSource() {
  let count = 0;
  const maxCount = 5;
  return {
    start(controller) {},
    pull(controller) {
      if (count < maxCount) {
        controller.enqueue(`some data; count: ${count}`);
        count++;
      } else {
        controller.close();
      }
    },
    cancel(reason) {},
  };
}
export function getSomeSink() {
  return {
    start(controller) {
      // This is called when the writable stream is constructed
    },
    write(chunk, controller) {
      // This is called when the consumer writes data
      console.log(chunk);
    },
    close(controller) {
      // This is called when the consumer closes the stream
    },
    abort(reason) {
      // This is called when the consumer aborts the stream
    },
  };
}
export function getSomeTransform() {
  return {
    transform(chunk, controller) {
      controller.enqueue(`${chunk.toUpperCase()} yes hello this is dog`);
    },
  };
}
