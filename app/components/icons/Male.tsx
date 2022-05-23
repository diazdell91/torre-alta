import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Male = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      transform="scale(1 -1) rotate(-45 -16.35 -9.45)"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Rect width={11} height={10.418} rx={5.209} />
      <Path d="M5.5 19v-7.93m2.912 5.172L5.5 19m0 0-2.912-2.758" />
    </G>
  </Svg>
);

export default Male;
