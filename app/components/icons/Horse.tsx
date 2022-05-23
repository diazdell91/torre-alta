import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { COLORS } from "../../theme/Theme";

const Horse = (props: SvgProps, { color = COLORS.primary }: SvgProps) => (
  <Svg color={color} width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M10.667 20.13c0 .479.916.957.916.957M9.75 9.609s1.833 2.91 1.833 6.695M9.75 4.826 7.917 1S7 1.618 7 3.87c0 2.251.917 2.39.917 2.39m4.583 4.305c0-2.122 1.833-3.557 1.833-5.26 0-1.704-.888-1.914-1.833-1.914s-1.833.21-1.833 1.913c0 1.704 1.833 3.139 1.833 5.261h0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.333 4.826C15.565 4.826 18 6.5 18 10.566c0 2.35-.993 3.347-1.833 6.217-.896 3.059 0 2.899 0 4.304 0 1.405-1.834 1.913-1.834 1.913h-3.666s-1.834-.508-1.834-1.913.896-1.245 0-4.304C7.993 13.913 7 12.916 7 10.565 7 6.5 9.435 4.826 10.667 4.826"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.333 20.13c0 .479-.916.957-.916.957M15.25 9.609s-1.833 2.91-1.833 6.695M15.25 4.826 17.083 1S18 1.618 18 3.87c0 2.251-.917 2.39-.917 2.39"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.292 12.478a.469.469 0 0 1-.459.479.469.469 0 0 1-.458-.479c0-.264.205-.478.458-.478s.459.214.459.478m7.333 0a.469.469 0 0 1-.458.479.469.469 0 0 1-.459-.479c0-.264.206-.478.459-.478s.458.214.458.478"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export default Horse;
