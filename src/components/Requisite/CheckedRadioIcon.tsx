import { Paper } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

/**
 * Checked radio icon component
 * @returns {JSX.Element} - Checked radio icon component
 */
export const CheckedRadioIcon = (): JSX.Element => (
  <Paper className="checked-radio-icon">
    <CircleIcon sx={{ fontSize: "14px", color: "#333333" }} />
  </Paper>
);
