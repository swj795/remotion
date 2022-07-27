import { interpolateColors, useCurrentFrame } from "remotion";


export const ColorChange = () => {
    const frame = useCurrentFrame() / 10;
    const color = interpolateColors(frame, [0, 20], ["red", "yellow"]); 
    const color2 = interpolateColors(frame, [0, 20], ["#ff0000", "#ffff00"]); 
    return (
        <div
        style={{
            color: color2,
            flex: 1,
            textAlign: "center",
            fontSize: "7em",
        }}
        >
        {frame}
        </div>
    )
}