import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Pause = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
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
      <Path d="M8 9.015C8 8.455 8.451 8 9.015 8h.431c.56 0 1.016.459 1.016 1.015v6.97c0 .56-.452 1.015-1.016 1.015h-.43A1.018 1.018 0 0 1 8 15.985v-6.97zm5.538 0c0-.56.452-1.015 1.016-1.015h.43C15.546 8 16 8.459 16 9.015v6.97c0 .56-.451 1.015-1.015 1.015h-.431a1.02 1.02 0 0 1-1.016-1.015v-6.97z" />
    </G>
  </Svg>
);

export default Pause;
