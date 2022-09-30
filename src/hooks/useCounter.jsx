import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
      // setFoo(foo + 1);
      // ↑これだと直接代入になっていて、前の状態を引き継いでいない
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};