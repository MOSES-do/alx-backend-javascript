export default function getListStudentIds(value) {
  if (!(value instanceof Array)) return [];

  const Ids = value.map((ids) => ids.id);
  return Ids;
}
