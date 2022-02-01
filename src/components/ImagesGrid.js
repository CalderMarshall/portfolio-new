import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CircularProgress from '@mui/material/CircularProgress';

export default function ImagesGrid() {
  const [showGallery, setShowGallery] = useState(false);
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  const imagesLoaded = () => {
    setShowGallery(true)
  }
  return (
    <Container style={{ padding: "0 5px" }}>
      <div style={{ padding: 15 }}>
        <Typography variant="h5" paragraph align="center">
          Here's how I spend my free time!
        </Typography>
        
        <div className="gallery-container">
          <div style={showGallery? {} : {opacity: 0}}>
            <ImageGallery additionalClass="gallery-element" onImageLoad={() => imagesLoaded()} showFullscreenButton={false} showPlayButton={false} items={images} />
          </div>
          <div style={showGallery? {display: 'none'} : {height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress />
          </div>
        </div>


        {/* <div>
          <img src={require("../static/images/beer_run.jpg")} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={require("../static/images/pisgah.jpg")} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={require("../static/images/driftwood.jpg")} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={require("../static/images/vail.jpg")} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={require("../static/images/kitchen.jpg")} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={require("../static/images/south_loop.jpg")} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={require("../static/images/red_rocks.jpg")} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={require("../static/images/fats.jpg")} />
          <p className="legend">Legend 3</p>
        </div> */}
      </div>
    </Container>
  );
}
