import { TemperatureUnit } from "@Types/dht22Data";

export function formatTemperature(
  temperature: number,
  {
    unit = "C",
  }: {
    unit?: TemperatureUnit;
  } = {}
): string {
  return `${temperature}°${unit}`;
}
export function fromCelciusToFahrenheit(temperature: number): number {
  return temperature * 1.8 + 32;
}
