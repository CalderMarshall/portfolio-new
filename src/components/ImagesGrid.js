import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function ImagesGrid() {
  const [showGallery, setShowGallery] = useState(false);
  const images = [
    {
      original: `${require("../static/images/2.jpg")}`,
      orgininalAlt: "bike",
    },
    {
      original: `${require("../static/images/1.jpg")}`,
      orgininalAlt: "overlook",
    },
    {
      original: `${require("../static/images/3.jpg")}`,
      orgininalAlt: "bike lake",
    },
    {
      original: `${require("../static/images/4.jpg")}`,
      orgininalAlt: "snowboarding vail",
    },
    {
      original: `${require("../static/images/5.jpg")}`,
      orgininalAlt: "chevy van bike",
    },
    {
      original: `${require("../static/images/6.jpg")}`,
      orgininalAlt: "red rocks",
    },
    {
      original: `${require("../static/images/7.jpg")}`,
      orgininalAlt: "looking glass waterfall",
    },
  ];
  const imagesLoaded = () => {
    setTimeout(() => {
      setShowGallery(true);
    }, 300);
  };
  return (
    <Container style={{ padding: "0 5px" }}>
      <div className="pad-15">
        <Typography variant="h5" paragraph align="center">
          Here's how I spend my free time!
        </Typography>

        <div className="gallery-container">
          <div style={showGallery ? {} : { opacity: 0, width: 0 }}>
            <ImageGallery
              additionalClass="gallery-element"
              showBullets={true}
              showNav={false}
              showThumbnails={false}
              onImageLoad={() => imagesLoaded()}
              showFullscreenButton={false}
              showPlayButton={false}
              items={images}
            />
          </div>
          <div
            style={
              showGallery
                ? { display: "none" }
                : {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "323px",
                    alignItems: "center",
                  }
            }
          >
            <CircularProgress />
          </div>
        </div>
      </div>
    </Container>
  );
}
