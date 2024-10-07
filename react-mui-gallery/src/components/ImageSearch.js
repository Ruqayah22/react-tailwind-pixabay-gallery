import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <Grid
      container
      spacing={2}
      onClick={onSubmit}
    >
      <Grid item xs={4}>
        <TextField
          id="standard-basic"
          label="Search..."
          variant="standard"
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "300px", marginLeft: "-85px", marginTop: "10px" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Button
          variant="contained"
          // onClick={onSubmit}
          sx={{
            backgroundColor: "green",
            fontWeight: "bold",
            marginTop: "25px",
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImageSearch;

// // search will write the word

// import React, { useState } from "react";
// import {
//   // Button,
//   Grid,
//   TextField,
// } from "@mui/material";

// const ImageSearch = ({ searchText }) => {
//   const [text, setText] = useState("");

//   const onChange = (e) => {
//     const value = e.target.value;
//     setText(value);
//     searchText(value); // Trigger the search as the user types
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={4}>
//         <TextField
//           id="standard-basic"
//           label="Search..."
//           variant="standard"
//           value={text}
//           onChange={onChange} // Call onChange function to search while typing
//           sx={{ width: "300px", marginLeft: "-85px", marginTop: "10px" }}
//         />
//       </Grid>
//       {/* <Grid item xs={8}>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "green",
//             fontWeight: "bold",
//             marginTop: "25px",
//           }}
//         >
//           Search
//         </Button>
//       </Grid> */}
//     </Grid>
//   );
// };

// export default ImageSearch;
