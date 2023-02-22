import React, { useState, useEffect } from "react";
import { Image, ImageProps } from "react-native";

interface ImageType extends ImageProps {
  width?: number;
  height?: number;
  handleError?: (error: Error) => void;
}

/**
 * width / height 만으로 이미지 크기를 자동으로 resize 해주는 컴포넌트
 */
const AutoSizedImage = ({
  source,
  width,
  style,
  handleError,
  height,
  ...props
}: ImageType) => {
  const [dim, setDim] = useState(null) as any;
  let isMounted = true;

  const calculateDimensions = (newWidth: number, newHeight: number) => {
    if (width && height) {
      return setDim({ width, height });
    }
    if (!width && !height) {
      return setDim({ width: newWidth, height: newHeight });
    }
    if (!height) {
      const height = Number(newHeight)
        ? Math.floor((width as number) * (newHeight / newWidth))
        : width;
      return setDim({
        width,
        height,
      });
    }
    if (!width) {
      return setDim({ width: height * (newWidth / newHeight), height });
    }
  };

  useEffect(() => {
    // 웹 이미지
    if ((source as any).uri) {
      Image.getSize(
        (source as any).uri,
        (newWidth, newHeight) => {
          //  stop calculation when component unmouted
          if (!isMounted) {
            return;
          }

          calculateDimensions(newWidth, newHeight);
        },
        (error) => {
          // handling error
          if (handleError) {
            handleError(error);
          }
        }
      );
    } else if (source) {
      // 로컬 이미지
      const { width: newWidth, height: newHeight } =
        Image.resolveAssetSource(source);
      //  stop calculation when component unmouted
      if (!isMounted) {
        return;
      }
      calculateDimensions(newWidth, newHeight);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  if (dim) {
    return (
      <Image
        source={source}
        style={{ ...(style as object), height: dim.height, width: dim.width }}
        onError={(e) => {
          // handling error
          if (handleError) {
            handleError(e.nativeEvent.error);
          }
        }}
        {...props}
      />
    );
  }
  return null;
};

export default AutoSizedImage;
