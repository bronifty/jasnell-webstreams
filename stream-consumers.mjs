import { arrayBuffer, blob, json, text } from 'stream-consumers'
console.log( arrayBuffer, blob, json, text);

import path from 'path'
import { createReadStream } from 'fs'


const __dirname = new URL('.', import.meta.url).pathname;
const readable = createReadStream(path.join(__dirname, 'wing.png'))
const data = await blob(readable)
console.log(data)