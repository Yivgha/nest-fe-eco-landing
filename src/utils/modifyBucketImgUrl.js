export function modifyImgUrl(backendUrl) {
  const parts = backendUrl.split("/");
  const filenameIndex = parts.length - 1;
  parts.splice(filenameIndex, 0, "uploads");
  const modifiedUrl = parts.join("/");

  return modifiedUrl;
}
