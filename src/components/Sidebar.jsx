import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

const Sidebar = ({ selectedMetrics, setSelectedMetrics }) => {
  const metrics = [
    "Master-O ID",
    "Content Launch Date",
    "Challenges Status",
    "Completion Status",
    "Completion Date",
    "Completed In Days",
    "Attempts",
    "Score",
    "Max Score",
    "Time Spent",
    "Microskill Name",
    "Login Status",
    "Last Login Date",
  ];

  const toggleMetric = (metric) => {
    setSelectedMetrics((prev) =>
      prev.includes(metric)
        ? prev.filter((m) => m !== metric)
        : [...prev, metric]
    );
  };

  return (
    <Box
      sx={{
        width: 250,
        minWidth: 210,
        backgroundColor: "#8C719C",
        color: "#fff",
        padding: 2,
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Metrics
      </Typography>
      {metrics.map((metric) => (
        <FormControlLabel
          key={metric}
          control={
            <Checkbox
              checked={selectedMetrics.includes(metric)}
              onChange={() => toggleMetric(metric)}
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
          }
          label={<Typography variant="body2">{metric}</Typography>}
        />
      ))}
    </Box>
  );
};

export default Sidebar;
