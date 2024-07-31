export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arrBuffer = new DataView(new ArrayBuffer(length), 0, length);
  arrBuffer.setInt8(position, value);
  return arrBuffer;
}
