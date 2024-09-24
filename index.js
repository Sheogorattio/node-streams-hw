const fs = require('fs');
const { Transform } = require('stream');

class UpperTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const upperCaseChunk = chunk.toString().toUpperCase();
        this.push(upperCaseChunk);
        callback();
    }
}

const ReadStream = fs.createReadStream('./input.txt');

const upperTransform = new UpperTransform();

ReadStream.pipe(upperTransform);

upperTransform.on("data", (chunk) => {
    const textChunk = chunk.toString();
    for (let i = 0; i < textChunk.length; i++) {
        setTimeout(() => {
            console.log(textChunk[i]);
        }, i * 1000);
    }
});


