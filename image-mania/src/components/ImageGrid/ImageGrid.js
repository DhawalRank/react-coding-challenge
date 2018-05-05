import React, { Component } from "react";
import ImageGridPage from "./ImageGrigPage";
import ReactPaginate from "react-paginate";
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
  componentDidMount() {
    fetch(`${ApiCalls.get.photos}?page=1&per_page=20`, requestOptions)
      .then(res => res.json())
      .then(photos => {
        this.setState({ photos });
      })
      .catch(err => {
        console.error("Error happened during fetching!", err);
        this.setState({ errors: "Error happened during fetching!" });
      });
  }
  handlePageClick(page) {
    console.log(page.selected);
    fetch(
      `${ApiCalls.get.photos}?page=${page.selected + 1}&per_page=30`,
      requestOptions
    )
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
        <div>
          <ImageGridPage
            photos={this.state.photos}
            errors={this.state.errors}
          />
        </div>
        <div className="ImageGrid__pagination--div">
          <ReactPaginate
            previousLabel={"Prev."}
            nextLabel={"Next"}
            initialPage={0}
            breakLabel={<a>...</a>}
            activeClassName="ImageGrid__pagination--active"
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={page => this.handlePageClick(page)}
            containerClassName={"ImageGrid__pagination"}
          />
        </div>
      </div>
    );
  }
}

export default ImageGrid;
