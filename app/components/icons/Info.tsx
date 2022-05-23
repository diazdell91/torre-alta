import * as React from "react";
import Svg, { SvgProps, G, Path, Rect } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Info = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G transform="translate(2 2)" fill="none" fillRule="evenodd">
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 10v4"
      />
      <Path d="M11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
      <Rect
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={20}
        height={20}
        rx={10}
      />
    </G>
  </Svg>
);

export default Info;
