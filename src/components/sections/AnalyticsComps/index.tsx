import React from "react";
import DefaultRateChart from "./defaultChart";
import { defaultRateData } from "data/defaultRate";
import { Typography } from "@mui/material";

const App: React.FC = () => {
//  const loanData = defaultRateData;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Loan Payment Rate Chart
      </Typography>
      <DefaultRateChart data={defaultRateData} />
    </div>
  );
};

export default App;
