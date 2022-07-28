import { useEffect, useCallback, useState } from "react";
import { continueRender, delayRender } from "remotion";
 
export const MyDataFetch = () => {
  const [data, setData] = useState(null);
  // 不能将delayRender定义在组件外部
  const [handle] = useState(() => delayRender());
 
  const fetchData = useCallback(async () => {
    const response = await fetch("https://www.remotion.dev/docs/delay-render");
    const json = await response.json();
    setData(json);
 
    continueRender(handle);
  }, [handle]);
 
  useEffect(() => {
    fetchData();
  }, [fetchData]);
 
  return (
    <div>
      {data ? ( <div>This video has data from an API! {JSON.stringify(data)}</div>
) : <div>hello</div>}
    </div>
  );
};
