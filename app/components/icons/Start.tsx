import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Start = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 22C6.516 22 2 17.323 2 12S6.516 2 12 2s10 4.677 10 10-4.516 10-10 10z" />
      <Path d="M9 7.479c0-.442.304-.608.676-.371l7.044 4.463c.374.237.373.621 0 .857l-7.044 4.464c-.373.237-.676.072-.676-.371V7.479z" />
    </G>
  </Svg>
);

export default Start;
