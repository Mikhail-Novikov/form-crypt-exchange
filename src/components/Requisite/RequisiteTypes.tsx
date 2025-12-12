import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { RequisitesItem } from "./RequisitesItem";
import { RequisiteType } from "./RequisiteType";

/**
 * Компонент для отображения реквизитов, связанных с типом карты
 *
 * @returns {JSX.Element} - Компонент для отображения реквизитов
 */
export const RequisiteTypes = (): JSX.Element => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          margin: "24px 0",
        }}>
        <Typography variant="h2" sx={{ marginBottom: 0 }}>
          Реквизиты
        </Typography>

        <FormControlLabel
          value="bottom"
          control={<Checkbox defaultChecked checkedIcon={<CheckIcon />} />}
          label="Сохранить реквизиты"
          labelPlacement="start"
        />
      </Box>

      <Grid container direction="column" gap={2}>
        <RequisiteType />
        <RequisitesItem value="ФИО владельца" />
        <RequisitesItem value="Адрес" />
      </Grid>
    </>
  );
};
