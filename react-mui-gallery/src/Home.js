// import React, { useEffect, useState } from "react";
// import ImageCard from "./components/ImageCard";
// import ImageSearch from "./components/ImageSearch";
// import { Box, Container, Typography } from "@mui/material";

// const Home = () => {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [term, setTerm] = useState("");

//   useEffect(() => {
//     fetch(
//       `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setImages(data.hits);
//         setIsLoading(false);
//       })
//       .catch((err) => console.log(err));
//   }, [term]);

//   return (
//     <Container >
//       <ImageSearch searchText={(text) => setTerm(text)} />
//       {!isLoading && images.length === 0 && (
//         <Typography>No Images Found</Typography>
//       )}
//       {isLoading ? (
//         <Typography>Loading...</Typography>
//       ) : (
//         <Box>
//           {images.map((image) => (
//             <ImageCard key={image.id} image={image} />
//           ))}
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import { Box, Container, Typography, Grid } from "@mui/material";

const Home = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <Container>
    <Box marginLeft={60} >

      <ImageSearch searchText={(text) => setTerm(text)} />
    </Box>

      {/* {!isLoading && images.length === 0 && (
        <Typography sx={{ fontSize: "50px" }}>No Images Found</Typography> 
      )} */}

      {!isLoading && images.length === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh", // Ensures the text is vertically centered
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "50px" }}>No Images Found</Typography>
        </Box>
      )}

      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box mt={2}>
          <Grid container spacing={3}>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                <ImageCard image={image} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Home;
