import * as React from "react";
import Svg, { Rect, Circle, SvgProps } from "react-native-svg";

interface VegIconProps extends SvgProps {
  fill?: string;        // Fill for inner circle
  stroke?: string;      // Stroke for outer rounded rect
  strokeWidth?: number; // Stroke width for outer rounded rect
}

const VegIcon = ({
  fill = "#0DC028",        // Default green for inner circle
  stroke = "#0DC028",      // Default green for border
  strokeWidth = 2,         // Stroke width for outer rect
  ...props
}: VegIconProps) => (
  <Svg width={35} height={35} viewBox="0 0 20 20" fill="none" {...props}>
    <Rect
      x={1}
      y={1}
      width={18}
      height={18}
      rx={4.5}
      fill="none"                  // Outer rect: transparent
      stroke={stroke}              // Outer rect: green border
      strokeWidth={strokeWidth}
    />
    <Circle
      cx={10}
      cy={10}
      r={5}
      fill={fill}                  // Inner circle: solid fill color
    />
  </Svg>
);

export default VegIcon;
