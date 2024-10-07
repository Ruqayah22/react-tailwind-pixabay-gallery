import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Chip,
} from "@mui/material";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(",");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image.webformatURL}
        // image="../images/logo22-1.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Photo by {image.user}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Views:
          </Grid>
          <Grid item xs={8}>
            {image.views}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Downloads:
          </Grid>
          <Grid item xs={8}>
            {image.downloads}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Likes:
          </Grid>
          <Grid item xs={8}>
            {image.likes}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={`# ${tag}`}
              variant="outlined"
              sx={{ backgroundColor: "#F5F5F7", fontSize: "10px" }}
            />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ImageCard