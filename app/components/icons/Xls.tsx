import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Xls = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
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
      <Path d="M4 7.217h5.368V2m-.894 10.435 3.579 5.217m0-5.217-3.58 5.217m8.948-1.304c0 .72.8 1.304 1.79 1.304.988 0 1.789-.583 1.789-1.304 0-.72-.8-1.304-1.79-1.304-.988 0-1.789-.584-1.789-1.305 0-.72.8-1.304 1.79-1.304.988 0 1.789.584 1.789 1.304M13.842 12.463v4.783m2.685.321h-2.685" />
    </G>
  </Svg>
);

export default Xls;
