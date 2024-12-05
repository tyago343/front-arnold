export function formatTemperature(
  temperature: number,
  {
    unit = "C",
  }: {
    unit?: "C" | "F";
  } = {}
): string {
  return `${temperature}°${unit}`;
}
export function fromCelciusToFahrenheit(temperature: number): number {
  return temperature * 1.8 + 32;
}
