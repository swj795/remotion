import { useCurrentFrame, useVideoConfig, spring } from 'remotion'

export const SpringAnmation = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const value = spring({
        frame,
        fps,
        config: {
        stiffness: 100,
    },
    durationInFrames: 40,
});
    return (
        <div
        style={
            {
                marginLeft: value,
                // flex: 1,
                // textAlign: "center",
                fontSize: "7em",

            }
        }
        >
            {frame}
        </div>
    )
}