import React from "react";
import PropTypes from "prop-types";
import GridGallery from "react-grid-gallery";
import Loading from "../Loading/ScaleLoader";
import "./Gallery.css";

const Gallery = props => {
  return (
    <div>
      {props.photos.length === 0 && props.errors === "" ? (
        <Loading />
      ) : (
        <div>
          {props.errors === "" ? (
            <div className="Gallery__container">
              <GridGallery
                images={props.photos}
                margin={3}
                showLightboxThumbnails={true}
                enableImageSelection={false}
                backdropClosesModal={true}
              />
            </div>
          ) : (
            <div className="Gallery__container">
              <h2>{props.errors}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired
};

export default Gallery;
