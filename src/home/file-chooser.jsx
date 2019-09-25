import avro from "avsc";
import React from "react";

export default class FileChooser extends React.Component {
  metadata = {};
  rows = [];
  state = { isLoading: false };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <div>loading...</div>
    ) : (
      <div>
        <label>Choose a file</label>
        <input type="file" onChange={this.handleFileChange}></input>
      </div>
    );
  }

  handleFileChange = e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.name.endsWith(".avro") || file.name.endsWith(".AVRO")) {
        this.setState({ isLoading: true });
        this.decodeAvro(file);
        return;
      }
    }
    throw new Error("Please provide a valid AVRO file");
  };

  decodeAvro = file => {
    let metadata = null;
    let rows = [];
    const { onData } = this.props;
    avro
      .createBlobDecoder(file)
      .on("metadata", type => {
        metadata = type;
      })
      .on("data", val => {
        rows.push(val);
      })
      .on("end", () => {
        //console.log(rows.length, file);
        //console.log(metadata);
        this.setState({ isLoading: false });
        onData && onData(file, metadata, rows);
      });
  };
}
