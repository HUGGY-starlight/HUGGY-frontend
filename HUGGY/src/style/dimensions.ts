import { Dimensions } from "react-native";

/**
 * 현재 디바이스 width
 */
export const screenWidth = Math.round(Dimensions.get("window").width);

/**
 * 현재 디바이스 height
 */
export const screenHeight = Math.round(Dimensions.get("window").height);

/**
 * 기본 크기
 */
export const defaultBtnWidth = screenWidth > 430 ? 380 : screenWidth - 50;
