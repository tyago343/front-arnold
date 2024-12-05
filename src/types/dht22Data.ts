export interface Dht22Data {
  temperature: number;
  humidity: number;
  time?: Date | string;
}
export const DHT22DataMock: Dht22Data = {
  temperature: 25,
  humidity: 50,
};

export function Dht22DataBuilder(data: Partial<Dht22Data>): Dht22Data {
  return { ...DHT22DataMock, ...data };
}

export function generateRandomDht22DataHistorical(count: number): Dht22Data[] {
  const time = new Date();
  const data: Dht22Data[] = [];
  for (let i = 0; i < count; i++) {
    const temperature = Math.random() * 40; // Random temperature between 0 and 40
    const humidity = Math.random() * 100; // Random humidity between 0 and 100
    data.push({ temperature, humidity, time: new Date(time) });
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
