export default function getStudentIdsSum(value) {
  if (!(value instanceof Array)) return [];

  const sumId = value.reduce((acc, ids) => acc + ids.id, 0);
  return sumId;
}
