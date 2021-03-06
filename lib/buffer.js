var Buffer = process.binding('buffer').Buffer;

exports.Buffer = Buffer;

function toHex (n) {
  if (n < 16) return "0" + n.toString(16);
  return n.toString(16);
}

Buffer.prototype.inspect = function () {
  var s = "<Buffer ";
  for (var i = 0; i < this.length; i++) {
    s += toHex(this[i]);
    if (i != this.length - 1) s += ' ';
  }
  s += ">";
  return s;
};

Buffer.prototype.toString = function (encoding, start, stop) {
  encoding = encoding || 'utf8';
  if (!start) start = 0;
  if (!stop) stop = this.length;

  if (encoding == 'utf8') {
    return this.utf8Slice(start, stop);
  } else if (encoding == 'ascii') {
    return this.asciiSlice(start, stop);
  } else if (encoding == 'binary') {
    return this.binarySlice(start, stop);
  } else {
    throw new Error('Unknown encoding');
  }
};


