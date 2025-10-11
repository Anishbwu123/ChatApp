import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface NotificationIconProps extends SvgProps {
    fill?: string;
    stroke?:string;
}
const NotificationIcon = ({fill= "#ffffff",stroke= "#000000", ...props }: NotificationIconProps)=> (
  <Svg
    width={23}
    height={26}
    viewBox="0 0 23 26"
    fill={fill}
    {...props}
  >
    <Path
      d="M3.89778 12.4341C3.81667 13.9852 3.91 15.6363 2.52445 16.6752C2.2059 16.9136 1.9474 17.223 1.76955 17.5789C1.5917 17.9348 1.4994 18.3273 1.5 18.7252C1.5 19.833 2.36889 20.7774 3.5 20.7774H19.5C20.6311 20.7774 21.5 19.833 21.5 18.7252C21.5 17.9185 21.12 17.1585 20.4756 16.6752C19.09 15.6363 19.1833 13.9852 19.1022 12.4341C19.0022 10.4853 18.1577 8.6493 16.7429 7.3053C15.3282 5.9613 13.4514 5.21191 11.5 5.21191C9.54864 5.21191 7.6718 5.9613 6.25707 7.3053C4.84234 8.6493 3.99777 10.4853 3.89778 12.4341Z"
      stroke={stroke}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.8334 20.7776C14.8334 21.6616 14.4822 22.5095 13.8571 23.1346C13.232 23.7597 12.3841 24.1109 11.5001 24.1109C10.616 24.1109 9.76818 23.7597 9.14306 23.1346C8.51794 22.5095 8.16675 21.6616 8.16675 20.7776M9.83341 3.13867C9.83341 4.05867 10.5801 5.22201 11.5001 5.22201C12.4201 5.22201 13.1667 4.05867 13.1667 3.13867C13.1667 2.21867 12.4201 1.88867 11.5001 1.88867C10.5801 1.88867 9.83341 2.21867 9.83341 3.13867Z"
      stroke={stroke}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default NotificationIcon;
