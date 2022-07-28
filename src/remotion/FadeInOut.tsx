import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
 
export const FadeInOut = () => {
    const frame = useCurrentFrame();
    const { durationInFrames, width, height, fps, id } = useVideoConfig();
    const opacity = interpolate(
        frame,
        [0, 20, durationInFrames - 20, durationInFrames],
        [0, 1, 1, 0]
      );
    return (
        <div
        style={{
            opacity,
            flex: 1,
            textAlign: "center",
            fontSize: "7em",
        }}
        >
            <p>{durationInFrames}</p>
            <p>{width}</p>
            <p>{height}</p>
            <p>{id}</p>
        </div>
    )
}
