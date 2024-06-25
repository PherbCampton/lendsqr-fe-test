import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSmall() {
  const [row, setRow] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setRow(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
      <InputLabel id="demo-select-small-label">Row</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={row}
        label="Row"
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
}
