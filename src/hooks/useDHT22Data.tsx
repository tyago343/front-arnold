import { useEffect, useState } from "react";
import { Dht22Data, Dht22DataBuilder } from "../types/dht22Data";
import { io } from "socket.io-client";
const initialValues = Dht22DataBuilder({ temperature: 21.6, humidity: 52.8 });
interface Dht22DataResponse {
  temperature: number;
  humidity: number;
  error: string | null;
  isLoading: boolean;
}
const useDHT22Data = (
  initialValue: { temperature: number; humidity: number } = initialValues
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
  return { ...data, error, isLoading };
};
export { useDHT22Data };
