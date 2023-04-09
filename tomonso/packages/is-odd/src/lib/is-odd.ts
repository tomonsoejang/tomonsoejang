import { isEven } from '@tomonso/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
