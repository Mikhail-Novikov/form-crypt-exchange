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
        padding: "16px 0 0",
      }}>
      <RadioGroup
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            "@media (max-width: 480px)": { flexWrap: "wrap" },
            "@media (min-width: 480px)": { flexWrap: "nowrap" },
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
