import { TextField, IconButton, Paper } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { NumberSpinnerProps } from "./types";
import { formatNumber } from "./utils";

/**
 * Компонент для ввода числовых значений
 * @param {{label: string, value: number}} props - свойства компонента
 * @returns {JSX.Element}
 */
const NumberSpinner = ({ label, value }: NumberSpinnerProps): JSX.Element => (
  <Paper className="amount-input-box" elevation={0}>
    <IconButton size="small">
      <RemoveIcon className="icon-rounded" />
    </IconButton>
    <TextField
      label={label}
      value={formatNumber(value)}
      inputProps={{
        inputMode: "decimal",
        readOnly: true,
      }}
    />
    <IconButton size="small">
      <AddIcon className="icon-rounded" />
    </IconButton>
  </Paper>
);

export default NumberSpinner;
