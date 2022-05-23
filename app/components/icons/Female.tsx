import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Female = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      transform="translate(7 3)"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Rect width={11} height={10.418} rx={5.209} />
      <Path d="M5.682 19v-7.93m2.366 6.034H3.316" />
    </G>
  </Svg>
);

export default Female;
