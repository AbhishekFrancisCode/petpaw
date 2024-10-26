import { IMG_LOAD_URL } from "@/config";
import { LanguageInputs, SkilsInputs } from "@/store/interfaces/profile";

/**
 * Add colan for given string after 2 letters
 * @param str
 * @returns
 *
 * addColan("0600") => "06:00"
 *
 */
export function addColan(str: string) {
  var arr = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 2) arr += ":" + str[i];
    else arr += str[i];
  }
  return arr;
}

/**
 * Add comma for given string after each word
 * @param "list string"
 * @returns
 *
 * addColan("List, value") => "str1,str2"
 *
 */
function setUnique(list: any) {
  var list_unique = new Set();
  list.forEach((data: any) => {
    list_unique.add(data);
  });
  return list_unique;
}

export function addComma(list: any[], value: string) {
  var str_list = new Array();
  list.forEach((data: any) => {
    str_list.push(data[value]);
  });
  const uniqueArray: any[] = Array.from(setUnique(str_list));
  const str = uniqueArray.join(",");
  return str;
}

export function imageUrl(image: string) {
  if (image.indexOf("https://") == -1) {
    return IMG_LOAD_URL + "" + image;
  } else {
    return image;
  }
}

export function handletags(tag: string) {
  if (tag == "event ip") {
    return "Event IP";
  }
  return tag.trim();
}

export function splitString(str: string): string[] {
  const languageArray = str ? str.split(",").map((lang) => lang.trim()) : [];
  return languageArray;
}

export const getTagList = (data: SkilsInputs[]) => {
  let y: string[] = [];
  data.map((item) => {
    y.push(item.value);
  });
  return y
    .join(",")
    .replace(/\s*,\s*/g, ",")
    .replace(/,\s*$/, "");
};

export const getChipList = (data: any) => {
  let y: LanguageInputs[] = [];
  const x: any = splitString(data);
  x &&
    x.forEach((element: string, i: number) =>
      y.push({
        id: i,
        value: element
      })
    );
  return y;
};
