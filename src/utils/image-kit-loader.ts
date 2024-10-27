import { IMG_LOAD_URL } from "@/config";

const imageKitLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  var urlEndpoint = IMG_LOAD_URL!;
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export default imageKitLoader;
