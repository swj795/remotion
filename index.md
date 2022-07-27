# remotion

## 基本结构

~~~tsx
// MyVideo.tsx
import {interpolate, useCurrentFrame,Sequence,Audio} from 'remotion'
 import audio from "../assets/audio.mp3";

const Title: React.FC<{title: string}> = ({title}) => {
    const frame = useCurrentFrame()
    const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'})
    return (
      <div style={{opacity}}>{title}</div>
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
// 这相当于一个组件
~~~

~~~tsx
// video.tsx

 import {Composition} from 'remotion'
import { MyVideo } from './MyVideo'; 

export const RemotionVideo: React.FC = () => {
    return (
      <>
        <Composition
          id="MyVideo"
          component={MyVideo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ hello: "world" }}
        />
        
      </>
    );
  };
// 注册一个Composition
~~~

~~~tsx
// index.tsx 入口文件
import { registerRoot } from "remotion";
import { RemotionVideo } from "./Video";
 
registerRoot(RemotionVideo);
~~~



### render audio visualization

### Data Fetching

 It works almost like you are used to: You can use the `fetch` API to load the data in a `useEffect` and set a state.

~~~tsx
delayRender() 
// 返回一个数值 handle
continueRender(handle)
// 等待handle后开始render
~~~

![image-20220725111136751](/Users/swj/Library/Application Support/typora-user-images/image-20220725111136751.png)



### interpolate

~~~js
interpolate()
// 第一个参数是输入的值
// 第二个参数是第一个参数的范围（The range of values that you expect the input to assume）
// 第三个参数是映射范围的值（The range of output values that you want the input to map to.）
// 第四个参数控制超出范围值的变化
// extend、clamp、identity
~~~

![image-20220727204154895](/Users/swj/Library/Application Support/typora-user-images/image-20220727204154895.png)

























































