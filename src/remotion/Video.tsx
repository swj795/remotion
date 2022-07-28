import { Composition, continueRender, delayRender, Folder } from "remotion";
import { useState, useEffect } from "react";
import { getVideoMetadata } from "@remotion/media-utils";
import { MyVideo } from "./MyVideo";
import { MyAudioVisual } from "./MyAudioVisual";
import { VideoTesting } from "./VideoTesting";
import { MyDataFetch } from "./DataFetch";
import { FadeIn } from "./FadeIn";
import { EasingAnimations } from "./EasingAnimation";
import { FadeInOut } from "./FadeInOut";
import { ColorChange } from "./ColorChange";
import { SpringAnmation } from "./SpringAnimation";
import { CurrentFrame } from "./CurrentFrame";

export const RemotionVideo: React.FC = () => {
  const [handle] = useState(() => delayRender());
  const [duration, setDuration] = useState(1);
  useEffect(() => {
    getVideoMetadata(
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    )
      .then(({ durationInSeconds }) => {
        setDuration(Math.round(durationInSeconds * 30));
        continueRender(handle);
      })
      .catch((err) => {
        console.log(`Error fetching metadata: ${err}`);
      });
  }, [handle]);
  return (
    <>
      <Folder name="test">
        <Composition
          id="MyVideo"
          component={MyVideo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ hello: "world" }}
        />
        {/* <Composition
          id="MyAudioVisual"
          component={MyAudioVisual}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ hello: "world" }}
        /> */}
        <Composition
          id="MyDataFetch"
          component={MyDataFetch}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ hello: "world" }}
        />
        <Composition
          id="dynamic-duration"
          component={VideoTesting}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={duration}
        />
        <Composition
          id="fade-in"
          component={FadeIn}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={duration}
        />
        <Composition
          id="fade-in-out"
          component={FadeInOut}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={100}
        />
        <Composition
          id="easing-animation"
          component={EasingAnimations}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={duration}
        />
        <Composition
          id="color-change"
          component={ColorChange}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={200}
        />
        <Composition
          id="spring-animation"
          component={SpringAnmation}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={40}
        />
        <Composition
          id="current-frame"
          component={CurrentFrame}
          width={1080}
          height={1080}
          fps={30}
          durationInFrames={40}
        />
      </Folder>
    </>
  );
};
