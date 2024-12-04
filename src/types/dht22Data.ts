export interface Dht22Data {
  temperature: number;
  humidity: number;
}
export const DHT22DataMock: Dht22Data = {
  temperature: 25,
  humidity: 50,
};

export function Dht22DataBuilder(data: Partial<Dht22Data>): Dht22Data {
  return { ...DHT22DataMock, ...data };
}
