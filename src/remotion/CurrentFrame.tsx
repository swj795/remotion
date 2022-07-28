import { Sequence, useCurrentFrame } from "remotion";
 
const Title = () => {
  const frame = useCurrentFrame(); // 25
  return <div style={{flex: 1, textAlign: "center", fontSize: '7em'}}>{frame}</div>;
};
 
const Subtitle = () => {
  const frame = useCurrentFrame(); // 15
  return <div style={{flex: 1, textAlign: "center", fontSize: '6em',marginTop: '200px'}}>{frame}</div>;
};
 
export const CurrentFrame = () => {
  const frame = useCurrentFrame(); // 25
 
  return (
    <div>
      <Title />
      <Sequence from={10}>
        <Subtitle />
      </Sequence>
    </div>
  );
};