import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface EditIconProps extends SvgProps{
    fill?:string;
    stroke?:string;
    strokeWidth?:number;
}
const EditIcon = ({ fill, stroke, strokeWidth=1, ...props }: EditIconProps) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      d="M0 18V13.75L13.2 0.575C13.4 0.391667 13.621 0.25 13.863 0.15C14.105 0.0500001 14.359 0 14.625 0C14.891 0 15.1493 0.0500001 15.4 0.15C15.6507 0.25 15.8673 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.771 2.4 17.863 2.65C17.955 2.9 18.0007 3.15 18 3.4C18 3.66667 17.9543 3.921 17.863 4.163C17.7717 4.405 17.6257 4.62567 17.425 4.825L4.25 18H0ZM14.6 4.8L16 3.4L14.6 2L13.2 3.4L14.6 4.8Z"
      fill={fill}     // fill color
      stroke={stroke}      // stroke color (black here)
      strokeWidth={strokeWidth}       // stroke width
    />
  </Svg>
);
export default EditIcon;
