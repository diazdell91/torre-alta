import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Left = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="m15 5-6 7 6 7"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Left;
