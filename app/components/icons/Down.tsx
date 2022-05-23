import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Down = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="m5 9 7 6 7-6"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Down;
