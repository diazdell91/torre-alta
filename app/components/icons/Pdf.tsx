import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Pdf = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      stroke="currentColor"
      strokeWidth={1.335}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M19.21 10.696V2H9.369L4 7.217V22h15.21v-2.609" />
      <Path d="M4 7.217h5.368V2m-.894 15.652v-5.217h1.342c.74 0 1.342.584 1.342 1.304 0 .72-.601 1.305-1.342 1.305H8.474m4.473 2.608v-5.217h1.044c1.154 0 2.088.778 2.088 1.739v1.74c0 .96-.934 1.738-2.088 1.738h-1.044 0zM21 12.435h-2.684v5.217m0-2.608h1.789" />
    </G>
  </Svg>
);

export default Pdf;
