import { useState, useEffect } from "react";

/**
 * 다음 스테이지로 넘어갈 수 있는가에 따라
 * 변경되는 색상
 */
export const useBtnTheme = (isActivated: boolean) => {
  const dark = "#818181" as const;
  const light = "#F5835E" as const;
  const [color, setColor] = useState<string>(dark);

  useEffect(() => {
    setColor(isActivated ? light : dark);
  }, [isActivated]);

  return [color];
};
