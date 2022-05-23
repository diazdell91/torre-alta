import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Muleta = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      stroke="#FFF"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        d="M14.5 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0h0z"
        stroke="currentColor"
      />
      <Path d="M7.5 11a4.5 4.5 0 0 1 9 0" stroke="currentColor" />
      <Path
        d="M12 21.556c5.458 0 8 1.444 8 1.444V10s-2.542 1.444-8 1.444S4 10 4 10v13s2.542-1.444 8-1.444h0z"
        stroke="currentColor"
      />
    </G>
  </Svg>
);

export default Muleta;
