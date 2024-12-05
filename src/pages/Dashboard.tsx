import { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { generateRandomDht22DataHistorical } from "@Types/dht22Data";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setTab(0)}>Temperatura / Humedad</button>
      <button onClick={() => setTab(1)}>Agua</button>
      {tab === 0 && <div>{Chart()}</div>}
      {tab === 1 && <div>Tab 2 content</div>}
    </div>
  );
};
export default Dashboard;
function Chart() {
  const data = generateRandomDht22DataHistorical(5);
  const chartData = {
    labels: data.map((item) => item.time), // Eje horizontal: hora
    datasets: [
      {
        label: `Temperatura (°${data[0].temperature.unit})`,
        data: data.map((item) => item.temperature.value), // Eje vertical: temperatura
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.3, // Suavizado de las líneas
      },
    ],
  };

  // Opciones del gráfico
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hora",
        },
      },
      y: {
        title: {
          display: true,
          text: `Temperatura (°${data[0].temperature.unit})`,
        },
        min: 20,
        max: 30,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
}
