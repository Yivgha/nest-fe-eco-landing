export default function splitStringWithSpace(str) {
  const reversedStr = str.split("").reverse().join("");
  const splitStr = reversedStr.replace(/\d{1,3}/g, "$& ");
  return splitStr.split("").reverse().join("");
}
