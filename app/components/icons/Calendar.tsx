import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Calendar = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M12 21c-6.934 0-8-1.875-8-7.5S5.066 6 12 6s8 1.875 8 7.5-1.066 7.5-8 7.5zM5 11h14M9 4v4m6-4v4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15a1 1 0 1 1-2 0 1 1 0 1 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 1 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 1 1 2 0"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export default Calendar;
