import React from "react";
import { Box, Button, Stack } from "@mui/material";

const FooterButtons = () => {
  const handleGenerate = () => {
    alert("Report generated!");
  };

  const handleEmail = () => {
    alert("Report emailed!");
  };

  const handleExport = () => {
    alert("Report exported!");
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Generate Report
        </Button>
        <Button variant="contained" color="secondary" onClick={handleEmail}>
          Email Report
        </Button>
        <Button variant="contained" color="success" onClick={handleExport}>
          Export to PDF/CSV
        </Button>
      </Stack>
    </Box>
  );
};

export default FooterButtons;
