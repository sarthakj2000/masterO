import React from "react";
import { Box, TextField, Typography, Grid, FormLabel } from "@mui/material";

const FilterComponent = ({ selectedMetrics, filters, setFilters }) => {
  const handleFilterChange = (metric, filterType, value) => {
    setFilters({
      ...filters,
      [metric]: { ...filters[metric], [filterType]: value },
    });
  };

  const filterTypes = {
    "Master-O ID": ["Count", "Distinct Count", "Distinct Value"],
    "Content Launch Date": ["Date Range", "Specific Date"],
    "Challenges Status": ["Count", "Percentage"],
    "Completion Status": ["Status", "Count", "Percentage"],
    "Completion Date": ["Date Range", "Specific Date"],
    "Completed In Days": ["Count", "Less Than", "Greater Than"],
    Attempts: ["Status"],
    Score: ["Count", "Average", "Percentage"],
    "Max Score": ["Count"],
    "Time Spent": ["Time Value", "Average"],
    "Microskill Name": ["Count", "Distinct Count", "Distinct Value"],
    "Login Status": ["Status", "Count"],
    "Last Login Date": ["Date Range", "Specific Date"],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        borderRadius: 2,
        padding: 3,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxHeight: 500,
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      {selectedMetrics.map((metric) => (
        <Box key={metric} sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle1">{metric}</Typography>
          <Grid container spacing={2}>
            {filterTypes[metric].map((filterType) => (
              <Grid item xs={12} sm={6} key={filterType}>
                {filterType.includes("Date") && (
                  <FormLabel>{filterType}</FormLabel>
                )}
                <TextField
                  label={filterType.includes("Date") ? "" : filterType}
                  value={filters[metric]?.[filterType] || ""}
                  onChange={(e) =>
                    handleFilterChange(metric, filterType, e.target.value)
                  }
                  fullWidth
                  variant="outlined"
                  type={filterType.includes("Date") ? "date" : "text"}
                  sx={{ backgroundColor: "#fff" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default FilterComponent;
