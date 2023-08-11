import useNumberRolling from "../hooks/useRollingNumbers";

export default function RollingNumbers({
  num,
  millis,
}: {
  num: number;
  millis?: number;
}) {
  const [currentValue, ref] = useNumberRolling(num, millis);

  return <span ref={ref}>{currentValue}</span>;
}
