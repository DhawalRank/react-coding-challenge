import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import Loading from "../helpers/Loading/ScaleLoader";

const ImageGridPage = props => {
  const gridImages = generateGridImages(props.photos);
  return (
    <div>
      {gridImages.length === 0 && props.errors === "" ? (
        <Loading />
      ) : (
        <div className="ImageGrid__gallery--block">
          <Gallery
            images={gridImages}
            margin={3}
            showLightboxThumbnails={true}
            enableImageSelection={false}
            backdropClosesModal={true}
          />
        </div>
      )}
    </div>
  );
};

ImageGridPage.propTypes = {
  photos: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired
};
function generateGridImages(images) {
  const gridImages = [];
  if (images) {
    images.forEach(anImage => {
      gridImages.push({
        src: anImage.urls.full,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        thumbnail: anImage.urls.thumb,
        caption: `Submitted By: @${anImage.user.username}`
      });
    });
  }
  return gridImages;
}
export default ImageGridPage;
