import styled from "styled-components/native";
import { TouchableOpacity, TextProps } from "react-native";

interface Props extends TextProps {
  /**텍스트 */
  text: string;
  /**삽입될 url */
  url: string;
}

/**url이 삽입되어, 클릭시 해당 url로 이동하는 텍스트 컴포넌트 */
const UrlText = ({ text, url, ...props }: Props) => {
  return (
    <TouchableOpacity>
      <Url {...props}>{text}</Url>
    </TouchableOpacity>
  );
};

const Url = styled.Text`
  text-decoration-line: underline;
  text-align: center;
  white-space: pre-line;
  line-height: 20px;
`;

export default UrlText;
