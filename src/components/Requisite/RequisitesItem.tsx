import React from "react";
import { Grid, IconButton, Input } from "@mui/material";
import { DriveFileRenameOutlineOutlined as EditIcon } from "@mui/icons-material";
import { RequisitesItemProps } from "./types";

/**
 * Компонент для отображения реквизита
 * @param props - свойства компонента
 * @returns {JSX.Element}
 */
export const RequisitesItem: React.FC<RequisitesItemProps> = ({
  value,
}): JSX.Element => (
  <Grid className="requisites-item" alignItems="center" container columns={8}>
    <Grid item xs={7}>
      <Input
        disableUnderline
        placeholder={value}
        inputProps={{
          disableUnderline: true,
        }}
      />
    </Grid>
    <Grid item xs={1} sx={{ textAlign: "right" }}>
      <IconButton>
        <EditIcon fontSize="large" />
      </IconButton>
    </Grid>
  </Grid>
);
