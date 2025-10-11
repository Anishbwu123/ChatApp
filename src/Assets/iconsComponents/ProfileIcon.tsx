import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface ProfileIconProps extends SvgProps {
    fill?: string;
    stroke?:string;
}
const ProfileIcon = ( {fill= "#15AE99", stroke= "#15AE99", ...props }: ProfileIconProps)=> (
  <Svg
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill={fill}
    {...props}
  >
    <Path
      d="M1.5 18.6113C1.5 17.2852 2.02678 16.0135 2.96447 15.0758C3.90215 14.1381 5.17392 13.6113 6.5 13.6113H16.5C17.8261 13.6113 19.0979 14.1381 20.0355 15.0758C20.9732 16.0135 21.5 17.2852 21.5 18.6113C21.5 19.2744 21.2366 19.9103 20.7678 20.3791C20.2989 20.8479 19.663 21.1113 19 21.1113H4C3.33696 21.1113 2.70107 20.8479 2.23223 20.3791C1.76339 19.9103 1.5 19.2744 1.5 18.6113Z"
      stroke={stroke}
      fill={fill}
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 8.61133C13.5711 8.61133 15.25 6.9324 15.25 4.86133C15.25 2.79026 13.5711 1.11133 11.5 1.11133C9.42893 1.11133 7.75 2.79026 7.75 4.86133C7.75 6.9324 9.42893 8.61133 11.5 8.61133Z"
      stroke={stroke}
      strokeWidth={1.8}
    />
  </Svg>
);
export default ProfileIcon;
