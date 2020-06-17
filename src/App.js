import React from "react";
import Card from "./Card";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: null,
      caption: null,
      data: [],
    };
    this.Filevalidation = this.Filevalidation.bind(this);
  }
  //Validates the image selected.
  Filevalidation = (event) => {
    const fi = document.getElementById("file");
    // Check if any file is selected.
    if (fi.files.length > 0) {
      for (var i = 0; i <= fi.files.length - 1; i++) {
        const fsize = fi.files.item(i).size;
        const file = Math.round(fsize / 1024);
        // Validating the size of the file.
        if (file >= 2048) {
          alert(
            "File is too big, please select a file with size less than 2mb"
          );
        } else {
          this.setState({
            file: URL.createObjectURL(event.target.files[0]),
          }); //returns the image if size<2mb
        }
      }
    }
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCaptionChange = (event) => {
    this.setState({ caption: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      name: this.state.name,
      caption: this.state.caption,
      file: <img src={this.state.file} alt="icon" width="600" />,
    };
    const data = [...this.state.data, info];
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <div className="container" onSubmit={this.handleSubmit}>
        <h1>Post your images with a quirky caption!</h1>

        <hr />

        <div className="row">
          <form className="form-inline" layout="inline">
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                id="username"
                type="text"
                required
                aria-required="true" //Ensures non-empty input.
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="username"
                value={this.state.name}
                onChange={this.handleNameChange}
                data-cy="new-name"
              />

              <input
                type="text"
                required
                aria-required="true"
                className="form-control" //Ensures non-empty input.
                placeholder="caption"
                value={this.state.caption}
                onChange={this.handleCaptionChange}
                data-cy="new-caption"
              />

              <input
                type="file"
                id="file"
                required
                aria-required="true" //Ensures non-empty input.
                className="form-control"
                placeholder="post"
                onChange={this.Filevalidation}
                data-cy="new-file"
              />
            </div>

            <button type="submit" className="btn btn-primary" cy-data="submit">
              Save
            </button>
          </form>
        </div>

        <div className="row">
          {this.state.data.map((info, index) => (
            <Card key={index} info={info} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;