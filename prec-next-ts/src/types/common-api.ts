import { AdEventPeriodConfig } from "./project-api";

export const getImageName = (imageName: string) => imageName.split("/").pop();

export const overrideImageSrc = (src: string) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "local") {
    return src;
  }

  return `${process.env.NEXT_PUBLIC_CMS_GET_DATA_URL}/${process.env.NEXT_PUBLIC_LANDING_IMAGE_PATH}${src}`;
};
