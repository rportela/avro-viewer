import avro from "avsc";
import React from "react";

export default class FileChooser extends React.Component {
  metadata = {};
  rows = [];

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Choose a file</label>
        <input type="file" onChange={this.handleFileChange}></input>
        <button type="submit">Open</button>
      </form>
    );
  }

  handleFileChange = e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.name.endsWith(".avro") || file.name.endsWith(".AVRO")) {
        this.decodeAvro(file);
        return;
      }
    }
    throw new Error("Please provide a valid AVRO file");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
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
        console.log(rows.length, file);
        console.log(metadata);

        onData && onData(file, metadata, rows);
      });
  };
}
