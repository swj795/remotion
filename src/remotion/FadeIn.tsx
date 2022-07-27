import { interpolate, useCurrentFrame } from "remotion";

export const FadeIn = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0,20],[0,1],{extrapolateRight: 'clamp'});
    return (
        <div style={{
            opacity,
            flex: 1,
            textAlign: "center",
            fontSize: "7em",
            }}
        >
            fade in{frame}
        </div>
    )
}