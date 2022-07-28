import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import audio from '../../public/audio.mp3';
 
export const MyAudioVisual: React.FC = () => {
  const frame = useCurrentFrame();
  const {  fps } = useVideoConfig();
  const audioData = useAudioData(audio);
 
  if (!audioData) {
    return null;
  }
 
  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 16,
  }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 
  // Render a bar chart for each frequency, the higher the amplitude,
  // the longer the bar
  return (
    <div>
      <Audio src={audio} />
      {visualization.map((v) => {
        return (
          <div
            style={{ width: 1000 * v, height: 15, backgroundColor: "blue" }}
          />
        );
      })}
    </div>
  );
};