import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Fab, TextField } from "@mui/material";
import { handleGenerate } from "../lib/Functions";

export default function ShayariGenerator() {
  const [content_type, setcontent] = React.useState("shayari");
  const [user_query, setuser_query] = React.useState("shayari");

  const handleChange = (event) => {
    setcontent(event.target.value);
  };
 
  return (
    <>
      <div style={{ display: "flex" }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">content</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={content_type}
            label="content"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"shayari"}>Shayari</MenuItem>
            <MenuItem value={"jokes"}>Jokes</MenuItem>
            <MenuItem value={"short-stories"}>Short-Stories</MenuItem>
          </Select>
        </FormControl>

        <div>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(e) => setuser_query(e.target.value)}
          />
          <Fab variant="extended" onClick={()=>handleGenerate(content_type, user_query)}>Generate {content_type}</Fab>
        </div>
      </div>

      <div style={
        {display:"flex"}
      } >
        <div></div>
        <div></div>
      </div>
    </>
  );
}
