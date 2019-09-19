import React from "react";
import FileChooser from "./file-chooser";
import FileViewer from "./file-viewer";

export default class Home extends React.Component {
  render() {
    const file = this.file;
    const metadata = this.metadata;
    const rows = this.rows;
    return file && metadata ? (
      <FileViewer file={file} metadata={metadata} rows={rows} />
    ) : (
      <FileChooser onData={this.handleData} />
    );
  }

  handleData = (file, metadata, rows) => {
    this.file = file;
    this.metadata = metadata;
    this.rows = rows;
    this.forceUpdate();
  };
}
