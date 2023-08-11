import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function useNumberRolling(
  num: number,
  millis: number = 500
): [number, (node: HTMLDivElement | null) => void] {
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentValue(0);
    }
  }, [inView]);

  useEffect(() => {
    const startTime = performance.now();
    const endTime = startTime + millis;
    const increment = num / millis;

    let animationFrame: number;

    const updateValue = () => {
      const currentTime = performance.now();

      if (currentTime < endTime) {
        const timePassed = currentTime - startTime;
        setCurrentValue(Math.min(Math.round(increment * timePassed), num));
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
  }, [num, inView, millis]);

  return [currentValue, ref];
}
