import {interpolate, useCurrentFrame, Sequence, Audio, spring, useVideoConfig} from 'remotion'
 import audio from "../assets/audio.mp3";

const Title: React.FC<{title: string}> = ({title}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const diver = spring({
      frame,
      fps,
    })
    const marginLeft = interpolate(diver, [0,1], [0,200])
    const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'})
 
    return (
      <>
        <div style={{ marginLeft,opacity }}>{title}</div>
      </>

    )
}

 
export const MyVideo = () => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
      }}
    >
      <Sequence from={0} durationInFrames={40}>
        <Title title="Hello" />
      </Sequence>
      <Sequence from={40}>
        <Title title="World" />
      </Sequence>
      <Audio
      src={audio}
      ></Audio>
      
    </div>
  );
};