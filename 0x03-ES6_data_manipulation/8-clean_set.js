export default function cleanSet(set, startString) {
  const newSet = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        newSet.push(valueSubStr);
      }
    }
  }
  return newSet.join('-');
}
