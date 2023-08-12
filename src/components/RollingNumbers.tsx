import useNumberRolling from "../hooks/useRollingNumbers";

export default function RollingNumbers({
  num,
  from,
  millis,
}: {
  num: number;
  from?: number;
  millis?: number;
}) {
  const [currentValue, ref] = useNumberRolling(num, from, millis);

  return <span ref={ref}>{currentValue}</span>;
}
