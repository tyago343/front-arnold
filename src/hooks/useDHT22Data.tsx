import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { formatTemperature } from "@utils/temperature.utils";
import { formatHumidity } from "@utils/humidity.utils";
import {
  Dht22Data,
  Dht22DataBuilder,
  Dht22DataResponse,
  TemperatureUnit,
} from "@Types/dht22Data";

const useDHT22Data = (unit: TemperatureUnit = "C") => {
  const [data, setData] = useState<Dht22Data>({
    temperature: { value: 0, unit: unit },
    humidity: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const socket = io(import.meta.env.VITE_SERVER_URL);
    socket.on("dht22/data", (data: Dht22DataResponse) => {
      setData(Dht22DataBuilder(data));
      setIsLoading(false);
    });
    socket.on("error", (error: string) => {
      setError(error);
      setIsLoading(false);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  const temperature = formatTemperature(data.temperature.value, {
    unit: data.temperature.unit,
  });
  const humidity = formatHumidity(data.humidity);
  return { temperature, humidity, error, isLoading };
};
export { useDHT22Data };
