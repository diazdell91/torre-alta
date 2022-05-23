import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const LogOut = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M19.111 12h-8m5 3 3-3-3-3m-6-5c-4.2 0-5.11 1-5.11 8s.91 8 5.11 8"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LogOut;
