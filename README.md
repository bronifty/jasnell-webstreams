- [jasnell web streams in node](https://www.jasnell.me/posts/webstreams)
- [web.dev/streams](https://web.dev/articles/streams)
- [codesandbox](https://codesandbox.io/p/sandbox/interesting-parm-76dd5y)
- [stackblitz](https://stackblitz.com/~/github.com/bronifty/jasnell-webstreams)

# James M Snell @jasnell Web and Node Streams Compatibility Article

#### Web ReadableStream Utilities (Source Sink and Transform)
[utils.mjs](./utils.mjs)

#### Read Source Transform Write to Sink with Node:Stream/Web

```js
(async () => {
  const readable = new ReadableStream(getSomeSource());
  const writable = new WritableStream(getSomeSink());
  const transform = new TransformStream(getSomeTransform());
  await readable.pipeThrough(transform).pipeTo(writable);
})();

```

> Checkpoint AI
> Q: is it accurate regarding web streams in node: a ReadableStream's pull operation will only run to fill the queue once the promise is resolved
> A: Yes, your understanding is accurate. In the Web Streams API, the `pull()` method is invoked by a `ReadableStream` whenever its internal data queue isn't full, and more data is needed. If the `pull()` method returns a promise, it won't be called again until the promise is resolved. This mechanism provides a natural backpressure model, preventing consumers from reading data from the source faster than it's available【8†source】.


#### Web Stream to Node Stream Conversion 
```js
import {
  Readable
} from 'node:stream';
import {getSomeSource} from "./utils.mjs"; 
const readable = new ReadableStream(getSomeSource()); // web stream
const nodeReadable = Readable.fromWeb(readable); // convert web stream to node stream
nodeReadable.on('data', console.log); 
```


#### Node Stream to Web Stream Conversion
```js
import { Readable } from 'node:stream';
const readable = new Readable({
  read(size) {
    this.push(Buffer.from('hello'));
  }
});
const readableStream = Readable.toWeb(readable);
const reader = readableStream.getReader();
const result = await reader.read();
console.log(result.value.toString());
```

