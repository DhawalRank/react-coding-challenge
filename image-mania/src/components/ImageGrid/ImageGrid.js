import React, { Component } from "react";
import Paginate from "../helpers/Paginate/Paginate";
import Gallery from "../helpers/Gallery/Gallery";
import { Credentials } from "../../unsplash/Credentials";
import { ApiCalls } from "../../unsplash/ApiCalls";

const requestOptions = {
  method: "GET",
  headers: {
    Authorization: Credentials.ACCESS_KEY,
    "Content-Type": "application/json"
  }
};

class ImageGrid extends Component {
  state = {
    errors: "",
    photos: [],
    pageCount: 100
  };

  handlePageClick(page) {
    const selected = page.selected + 1;
    fetch(`${ApiCalls.get.photos}?page=${selected}&per_page=30`, requestOptions)
      .then(res => res.json())
      .then(photos => {
        if (photos.length === 0) {
          this.setState({ errors: "No Images Found." });
        } else {
          this.setState({
            photos,
            errors: ""
          });
        }
      })
      .catch(err => {
        console.error("Error happened during fetching!", err);
        this.setState({ errors: "Error happened during fetching!" });
      });
  }
  render() {
    const photos = generateGridImages(this.state.photos);
    return (
      <div>
        <Gallery photos={photos} errors={this.state.errors} />
        <Paginate
          handlePageClick={page => this.handlePageClick(page)}
          pageCount={this.state.pageCount}
        />
      </div>
    );
  }
}
function generateGridImages(photos) {
  const gridPhotos = [];
  if (photos) {
    photos.forEach(aPhoto => {
      gridPhotos.push({
        src: aPhoto.urls.full,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        thumbnail: aPhoto.urls.thumb,
        caption: `Submitted By: @${aPhoto.user.username}`
      });
    });
  }
  return gridPhotos;
}

export default ImageGrid;
