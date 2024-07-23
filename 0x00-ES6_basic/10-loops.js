export default function appendToEachArrayValue(array, appendString) {
  for (const [i, idx] of array.entries()) {
    let value = array[i];
    array[i] = `${appendString}${value}`;
  }
  return array;
}
