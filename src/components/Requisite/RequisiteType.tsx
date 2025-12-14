import { useState } from "react";

import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { RequisitesItem } from "./RequisitesItem";
import { CheckedRadioIcon } from "./CheckedRadioIcon";

/**
 * Компонент для отображения реквизитов, связанных с типом карты
 * @returns {JSX.Element} - Компонент для отображения реквизитов
 */
export const RequisiteType = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState("card");

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        gap: 2,
        borderRadius: "8px",
        padding: "12px 0 0",
      }}>
      <RadioGroup
        sx={{ paddingLeft: "18px" }}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}>
        <Box
          sx={{
            display: "flex",
            "@media (max-width: 480px)": { flexWrap: "wrap", gap: 2, },
            "@media (min-width: 480px)": { flexWrap: "nowrap", gap: 3, },
          }}>
          <FormControlLabel
            value="card"
            control={<Radio checkedIcon={<CheckedRadioIcon />} />}
            label="Номер карты"
          />
          <FormControlLabel
            value="account"
            control={<Radio checkedIcon={<CheckedRadioIcon />} />}
            label="Номер договора"
          />
        </Box>
      </RadioGroup>
      <RequisitesItem value="Номер карты" />
    </Box>
  );
};
