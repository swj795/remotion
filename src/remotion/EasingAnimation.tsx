import { interpolate, useCurrentFrame, Easing } from "remotion";

export const EasingAnimations = () => {
    const frame = useCurrentFrame();
    const interpolated = interpolate(frame, [0, 100], [0, 1], {
        easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    return (
        <div style={{
            transform: `scale(${interpolated})`,
            backgroundColor: "red",
            flex: 1,
            textAlign: "center",
            fontSize: "7em",
            }}
        >
            fade in{frame}
        </div>
    )
}