import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Filter = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M5.016 5.161C5.325 6.876 6.482 10.185 10 13v4l4 3v-7c3.518-2.815 4.695-6.124 5.003-7.839C19.113 4.554 18.618 4 18 4H6.003c-.617 0-1.097.554-.987 1.161z"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Filter;
