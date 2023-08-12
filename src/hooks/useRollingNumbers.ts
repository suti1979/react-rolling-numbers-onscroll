import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function useNumberRolling(
  num: number,
  from: number = 0,
  millis: number = 500
): [number, (node: HTMLSpanElement | null) => void] {
  const [currentValue, setCurrentValue] = useState(from);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentValue(from);
    }
  }, [inView]);

  useEffect(() => {
    const startTime = performance.now();
    const endTime = startTime + millis;
    const increment = (num - from) / millis;

    let animationFrame: number;

    const updateValue = () => {
      const currentTime = performance.now();

      if (currentTime < endTime) {
        const timePassed = currentTime - startTime;
        setCurrentValue(
          Math.min(
            Math.max(
              Math.round(increment * timePassed) + from,
              Math.min(from, num)
            ),
            Math.max(from, num)
          )
        );
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setCurrentValue(num);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(updateValue);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [num, from, inView, millis]);

  return [currentValue, ref];
}
