import React from "react";
import { SerializedStyles } from "@emotion/react";
import {
  LazyLoadImageProps,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { useMatchMedia } from "@/src/hooks/use-match-media";

type Props = {
  pcSrc: string;
  alt: string;
  mobileSrc?: string;
  imageCss?: SerializedStyles[] | SerializedStyles;
  isPriority?: boolean;
  onClick?: () => void;
  shouldOverrideSrc?: boolean;
} & LazyLoadImageProps;

const ImageWrapper = (props: Props) => {
  const {
    pcSrc,
    alt,
    mobileSrc,
    imageCss,
    isPriority,
    onClick,
    shouldOverrideSrc,
    ...args
  } = props;

  const isMobile = useMatchMedia();

  const src = isMobile && mobileSrc ? mobileSrc : pcSrc;

  return (
    <LazyLoadImage
      alt={alt}
      src={shouldOverrideSrc ? src.replace(".png", ".webp") : src}
      css={imageCss}
      effect="blur"
      onClick={onClick}
      visibleByDefault={isPriority}
      // placeholderSrc={shouldOverrideSrc ? `/`}
      {...args}
    />
  );
};
