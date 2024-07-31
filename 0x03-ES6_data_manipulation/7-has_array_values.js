export default function hasValuesFromArray(sets, numArray) {
  return numArray.every((value) => sets.has(value));
}
