import useNumberRolling from '../hooks/useRollingNumbers'

export default function RollingNumbers({
  num,
  to,
  from,
  millis,
  easeOut,
}: {
  num?: number
  to?: number
  from?: number
  millis?: number
  easeOut?: boolean
}) {
  const [currentValue, ref] = useNumberRolling(num, to, from, millis, easeOut)

  return <span ref={ref}>{currentValue}</span>
}
