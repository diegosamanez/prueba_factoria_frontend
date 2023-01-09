export function divideRatio(ratio: string): string {
  const [numerator, denominator] = ratio.split("/").map(Number);
  const gcd = greatestCommonDivisor(numerator, denominator);
  return `${numerator / gcd}/${denominator / gcd}`;
}

function greatestCommonDivisor(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}
