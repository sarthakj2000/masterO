import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Preview = ({ selectedMetrics, filters }) => {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [],
  });

  const generateGraphData = () => {
    const months = ["January", "February", "March", "April", "May", "June"];
    const dataset = selectedMetrics.includes("Attempts")
      ? [10, 20, 30, 40, 50, 60]
      : selectedMetrics.includes("Score")
      ? [60, 55, 75, 80, 65, 85]
      : [65, 59, 80, 81, 56, 55];

    return {
      labels: months,
      datasets: [
        {
          label: selectedMetrics.join(", ") || "Default Metric",
          data: dataset,
          fill: false,
          borderColor: "#007bff",
          tension: 0.1,
        },
      ],
    };
  };

  useEffect(() => {
    const updatedGraphData = generateGraphData();
    setGraphData(updatedGraphData);
  }, [selectedMetrics, filters]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        padding: 3,
        borderRadius: 2,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Graphs will be displayed here based on filters:
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <strong>Metrics:</strong>{" "}
        {selectedMetrics.join(", ") || "None selected"}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <strong>Filters:</strong>{" "}
        {JSON.stringify(filters) || "No filters applied"}
      </Typography>

      <div style={{ marginTop: 20 }}>
        <Line data={graphData} options={options} />
      </div>
    </Box>
  );
};

export default Preview;
