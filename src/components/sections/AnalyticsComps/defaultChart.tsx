import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { LoanData } from "data/defaultRate";
import { theme } from "theme/theme";

// Register required Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);
interface DefaultRateChartProps {
  data: LoanData[];
}

const DefaultRateChart: React.FC<DefaultRateChartProps> = ({ data }) => {
  const labels = data.map((entry) => entry.month);
  const defaultRates = data.map((entry) =>
    parseFloat(((entry.defaultedLoans / entry.totalLoans) * 100).toFixed(2))
  );

  const chartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "Loan Payment Rate (%)",
        data: defaultRates,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        tension: 0.3,
        fill: true,
        borderWidth: 5,

      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    hover: {
      mode: "nearest",
      intersect: true,
    },
    plugins: {
      legend: {
        display: true,
        position: "top",

      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw; // Access raw value
            return `${value}% default rate`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Default Rate (%)",
        },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default DefaultRateChart;
