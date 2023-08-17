import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { customEaseOut } from '../lib/customEaseOut'

export default function useNumberRolling(
  to: number = 0,
  num: number = to || 0,
  from: number = 0,
  millis: number = 500,
  easeOut: boolean = false
): [number, (node: HTMLSpanElement | null) => void] {
  const [currentValue, setCurrentValue] = useState(from)
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      setCurrentValue(from)
    }
  }, [inView])

  useEffect(() => {
    let animationFrame: number
    let startTime: number

    const updateValue = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / millis, 1)
      const easedProgress = easeOut ? customEaseOut(progress) : progress

      const easedValue = from + (num - from) * easedProgress
      setCurrentValue(Math.round(easedValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue)
      } else {
        setCurrentValue(num)
      }
    }

    if (inView) {
      animationFrame = requestAnimationFrame(updateValue)
    }

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [num, from, inView, millis, easeOut])

  return [currentValue, ref]
}
