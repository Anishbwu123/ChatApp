import * as React from "react"
import Svg, { G, Path, Circle, Defs, Rect } from "react-native-svg"


function RedCircle(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} {...props} viewBox="0 0 220 220" // ✅ This makes it scale
        >
            <Circle cx="50" cy="50" r="45" fill="#FFD3CB" />
            {/* Inner blue circle, centered and smaller */}
            <Circle cx="50" cy="50" r="15" fill="#EB735C" />
        </Svg>
    )
}

export default RedCircle
