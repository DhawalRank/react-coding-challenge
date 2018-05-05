import React, { Component } from "react";
import ImageGridPage from "./ImageGrigPage";
import ReactPaginate from "react-paginate";
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
    current: 1
  };
  componentDidMount() {
    fetch(ApiCalls.get.photos, requestOptions)
      .then(res => res.json())
      .then(photos => {
        this.setState({ photos });
      })
      .catch(err => {
        console.error("Error happened during fetching!", err);
        this.setState({ errors: "Error happened during fetching!" });
      });
  }
  render() {
    return (
      <ImageGridPage photos={this.state.photos} errors={this.state.errors} />
    );
  }
}

export default ImageGrid;
