export default function getStudentsByLocation(value, loc) {
  if (!(value instanceof Array)) return [];

  const Location = value.filter((student) => student.location === loc);
  return Location;
}
