import React, { Component } from "react";
import ImageGridPage from "./ImageGrigPage";
import Paginate from "../helpers/Paginate/Paginate";
import { Credentials } from "../../unsplash/Credentials";
import { ApiCalls } from "../../unsplash/ApiCalls";
import "./ImageGrid.css";

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
        this.setState({ photos });
      })
      .catch(err => {
        console.error("Error happened during fetching!", err);
        this.setState({ errors: "Error happened during fetching!" });
      });
  }
  render() {
    return (
      <div>
        <ImageGridPage photos={this.state.photos} errors={this.state.errors} />
        <Paginate
          handlePageClick={page => this.handlePageClick(page)}
          pageCount={this.state.pageCount}
        />
      </div>
    );
  }
}

export default ImageGrid;
