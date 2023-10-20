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