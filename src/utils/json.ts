/**
 *
 * Object Modification HELPER FUNCTIONS
 *
 *
 * 1) func copyObject -> copys object without reference.
 */

export function copyObject(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}

export function jsonDecode(str: string) {
  if (str == "" || str == undefined) str = "{}";
  return JSON.parse(str);
}
