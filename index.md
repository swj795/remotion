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

### interpolateColor

基本与interpolate相同

### registerRoot（）

只能调用一次，在根组件中，一个或多个composition可以被调用

### spring（）

~~~js
// 参数
// frame 当前时间值 一般情况下传递useCurrentFrame的返回值 一般从0帧开始
// form 动画的初始值 默认值为0
// to 动画的终值 默认值为1
// fps 常用useVideoConfig的返回值
// config 用来自定义动画的物理属性
// mass If you reduce the mass, the animation becomes faster 默认值1
// damping 动画减速
// stiffness 弹簧的刚度系数
// overShotClamping 决定动画是否可以通过to值进行拍摄 默认false
// durationInFrame 拉伸动画的曲线
~~~

### useCurrentFrame

~~~js
// 可以检索当前帧的视频
// 返回一个数值
~~~

### useVideoConfig

~~~js
// 能够获得以下信息
~~~

![image-20220727231252936](/Users/swj/Library/Application Support/typora-user-images/image-20220727231252936.png)

### staticFile()

~~~js
// 将静态资源转化成url

import { Img, staticFile } from "remotion";
 
const myImage = staticFile(`/my-image.png`);
 
<Img src={myImage} />;
~~~

### loop（）

~~~js
// 重复某个动画
// durationFrame(必填项) 重复多少帧
// times(optional) 次数循环次数 默认infinty
// layout(optional) 布局默认absolute-fill 可设none即取消
~~~

### Folder

~~~js
// 给侧边作品栏分类
~~~





### troubleshoot

在渲染时有闪烁情况，表示有一个多线程的问题

![image-20220728144918650](/Users/swj/Library/Application Support/typora-user-images/image-20220728144918650.png)

通过多个选项卡来加速视频的渲染，每个选项不共享状态和动画，通过useCurrentFrame打破独立运行，帧不会按顺序渲染，有些帧会被跳过。













































