import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import NumberSpinner from "./NumberSpinner";

import { VolumesInputsSectionProps } from "./types";

/**
 * Компонент для ввода объемов
 * @param sendAmount - Объем, который отправляется
 * @param receiveAmount - Объем, который получается
 * @returns {JSX.Element}
 */
export const VolumesInputs: React.FC<VolumesInputsSectionProps> = ({
  sendAmount,
  receiveAmount,
}): JSX.Element => (
  <Box>
    <Typography variant="h2">Объемы</Typography>
    <Grid
      container
      columns={{ sm: 2 }}
      gap={2}
      sx={{
        "@media (max-width: 480px)": { flexWrap: "wrap" },
        "@media (min-width: 480px)": { flexWrap: "nowrap" },
      }}>
      <Grid sx={{ flexGrow: 1 }}>
        <Box>
          <Typography variant="body1">Отдаёте (лот 1000)</Typography>
          <NumberSpinner label="Etherium, ETH" value={sendAmount} />
        </Box>
      </Grid>
      <Grid sx={{ flexGrow: 1 }}>
        <Box>
          <Typography variant="body1">Получаете (лот 1000)</Typography>
          <NumberSpinner label="Рубль, RUR" value={receiveAmount} />
        </Box>
      </Grid>
    </Grid>
  </Box>
);
