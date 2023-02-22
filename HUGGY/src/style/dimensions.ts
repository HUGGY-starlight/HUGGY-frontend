import { Dimensions } from "react-native";

/**
 * 현재 디바이스 width
 */
export const screenWidth = Math.round(Dimensions.get("window").width);

/**
 * 현재 디바이스 height
 */
export const screenHeight = Math.round(Dimensions.get("window").height);
