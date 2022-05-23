import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Edit = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M8.5 14.587c-1.226-1.226.118-2.946 3.458-6.287C15.3 4.959 16.274 4.36 17.5 5.587c1.226 1.226.628 2.2-2.713 5.54-3.341 3.343-5.061 4.686-6.287 3.46z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.707 17.794a.999.999 0 1 1-1.414-1.414.999.999 0 1 1 1.414 1.414"
        fill="currentColor"
      />
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.648 10.734 2.704 2.705"
      />
    </G>
  </Svg>
);

export default Edit;
