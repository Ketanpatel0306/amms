import { Config } from "config";

export const imageURL = (URL) => {
  const replacedImageUrl = Config.API_URL + "/" + URL;

  return replacedImageUrl;
};

export const removeBaseImageURL = (URL) => {
  const replacedImageUrl = URL.replace(Config.API_URL, "");

  return replacedImageUrl;
};
