import { AbsoluteFill, staticFile, Video} from 'remotion'

export const MyVideo = () => {
  const videoMp4 = staticFile("video.mp4")
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
      }}
    >
      <AbsoluteFill>
        <Video 
        src={videoMp4} 
        endAt={200}
        startFrom={0}
        />
      </AbsoluteFill>
    </div>
  );
};