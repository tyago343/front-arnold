import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { formatTemperature } from "@utils/temperature.utils";
import { formatHumidity } from "@utils/humidity.utils";
import { Dht22Data, Dht22DataBuilder } from "@Types/dht22Data";
const initialValues = Dht22DataBuilder({ temperature: 21.6, humidity: 52.8 });
interface Dht22DataResponse {
  temperature: string;
  humidity: string;
  error: string | null;
  isLoading: boolean;
}
const useDHT22Data = (
  initialValue: { temperature: number; humidity: number } = initialValues,
  unit: "C" | "F" = "C"
): Dht22DataResponse => {
  const [data, setData] = useState<Dht22Data>(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("useEffect");
    const socket = io("http://localhost:3000");
    socket.on("dht22/data", (data: Dht22Data) => {
      setData(data);
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
  const temperature = formatTemperature(data.temperature, { unit });
  const humidity = formatHumidity(data.humidity);
  return { temperature, humidity, error, isLoading };
};
export { useDHT22Data };
