import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Task = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.009 5.486h-7.014m7.014 6h-7.014m7.014 6.5h-7.014"
      />
      <Path
        d="M7.979 5.49a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zm0 6.28a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zm0 6.28a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0z"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export default Task;
