import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Check = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      transform="translate(2 2)"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Rect width={20} height={20} rx={10} />
      <Path d="m14.923 7-5.8 5.8L6 9.677" />
    </G>
  </Svg>
);

export default Check;
