import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface GlobeIconProps  extends SvgProps{
    fill?:string
}
const GlobeIcon = ( {fill= "#ffffff",stroke= "#15AE99", ...props }: GlobeIconProps)=> (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill={fill}
    {...props}
  >
    <Path
      d="M1 10C1 14.9707 5.0293 19 10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 10Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.8999 1.04688C10.8999 1.04688 13.5999 4.60187 13.5999 10.0019C13.5999 15.4019 10.8999 18.9569 10.8999 18.9569M9.09989 18.9569C9.09989 18.9569 6.39989 15.4019 6.39989 10.0019C6.39989 4.60187 9.09989 1.04688 9.09989 1.04688M1.56689 13.1519H18.4329M1.56689 6.85187H18.4329"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default GlobeIcon;
