export interface Dht22Data {
  temperature: Temperature;
  humidity: number;
  time?: string;
}
export interface Temperature {
  value: number;
  unit: TemperatureUnit;
}
export interface Dht22DataResponse {
  temperature: number;
  humidity: number;
}
export type TemperatureUnit = "C" | "F" | "K";

export const DHT22DataMock: Dht22Data = {
  temperature: { value: 21.6, unit: "C" },
  humidity: 52.8,
};

export function Dht22DataBuilder(
  data: Partial<Dht22DataResponse>,
  { unit }: { unit?: TemperatureUnit } = {}
): Dht22Data {
  return {
    temperature: {
      value: data.temperature ?? DHT22DataMock.temperature.value,
      unit: unit ?? DHT22DataMock.temperature.unit,
    },
    humidity: data.humidity ?? DHT22DataMock.humidity,
    time: new Date().toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

export function generateRandomDht22DataHistorical(count: number): Dht22Data[] {
  const time = new Date();
  const data: Dht22Data[] = [];
  for (let i = 0; i < count; i++) {
    const temperature = {
      value: Math.random() * 40,
      unit: "C" as TemperatureUnit,
    };
    const humidity = Math.random() * 100;
    data.push({
      temperature,
      humidity,
      time: time.toLocaleString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    time.setHours(time.getHours() - 1);
  }
  return data
    .sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime())
    .map((entry) => ({
      ...entry,
      time: entry.time
        ? `${new Date(entry.time).getHours()}:${new Date(entry.time)
            .getMinutes()
            .toString()
            .padStart(2, "0")}`
        : undefined,
    }));
}
