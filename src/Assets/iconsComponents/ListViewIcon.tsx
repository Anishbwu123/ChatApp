import * as React from "react";
import Svg, { Path ,SvgProps } from "react-native-svg";
interface ListViewIconProps extends SvgProps{
    fill: string;
    stroke: string;
    strokeWidth: number;
}
const ListViewIcon = ({ fill, stroke, strokeWidth=1, ...props }: ListViewIconProps) => (
  <Svg
    width={18}
    height={13}
    viewBox="0 0 18 13"
    fill="none"
    {...props}
  >
    <Path
      d="M4.9375 1.65625H16.75M4.9375 6.25H16.75M4.9375 10.8438H16.75"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.65625 2.3125C2.01869 2.3125 2.3125 2.01869 2.3125 1.65625C2.3125 1.29381 2.01869 1 1.65625 1C1.29381 1 1 1.29381 1 1.65625C1 2.01869 1.29381 2.3125 1.65625 2.3125Z"
       stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.65625 6.90625C2.01869 6.90625 2.3125 6.61244 2.3125 6.25C2.3125 5.88756 2.01869 5.59375 1.65625 5.59375C1.29381 5.59375 1 5.88756 1 6.25C1 6.61244 1.29381 6.90625 1.65625 6.90625Z"
          stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.65625 11.5C2.01869 11.5 2.3125 11.2062 2.3125 10.8438C2.3125 10.4813 2.01869 10.1875 1.65625 10.1875C1.29381 10.1875 1 10.4813 1 10.8438C1 11.2062 1.29381 11.5 1.65625 11.5Z"
          stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ListViewIcon;
