import React, { useState } from "react";
import { Box, CssBaseline, Grid, Container } from "@mui/material";
import Sidebar from "./components/Sidebar";
import FilterComponent from "./components/FilterComponent";
import Preview from "./components/Preview";
import FooterButtons from "./components/FooterButtons";

const App = () => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [filters, setFilters] = useState({});

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Sidebar
        selectedMetrics={selectedMetrics}
        setSelectedMetrics={setSelectedMetrics}
      />
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FilterComponent
              selectedMetrics={selectedMetrics}
              filters={filters}
              setFilters={setFilters}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Preview selectedMetrics={selectedMetrics} filters={filters} />
          </Grid>
        </Grid>
        <FooterButtons selectedMetrics={selectedMetrics} filters={filters} />
      </Box>
    </Box>
  );
};

export default App;
