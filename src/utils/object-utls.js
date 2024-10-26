export function arrayUnique(array) {
  // return array.indexOf(value) === index;
  return [...new Set(array)];
}
