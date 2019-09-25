import React from "react";
import FileViewerPagination from "./file-viewer-pagination";
export default class FileViewer extends React.Component {
  state = { page: 0, pageSize: 100 };
  render() {
    const { file, metadata, onClose, rows } = this.props;
    const { page, pageSize } = this.state;
    document.title = file.name;
    const pageCount = Math.ceil(rows.length / pageSize);
    return (
      <React.Fragment>
        <div id="page-header">
          <div className="float-right">
            <button onClick={onClose}>X</button>
          </div>
          <h1>
            {file.name}, {this.humanSize(file.size)},{" last modified on "}
            {file.lastModifiedDate.toString()}
          </h1>
        </div>
        <div id="table-scroll">
          <table>
            <thead>
              <tr>{metadata.fields.map(this.renderHeader)}</tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </div>
        <div id="page-footer">
          <FileViewerPagination
            page={page}
            pageCount={pageCount}
            pageSize={pageSize}
            gotoPage={this.gotoPage}
            changePageSize={this.changePageSize}
          />
        </div>
      </React.Fragment>
    );
  }

  renderHeader = (header, i) => {
    return (
      <th key={i} className={header.type.branchName}>
        {header.name} ({header.type.branchName})
      </th>
    );
  };

  renderRows() {
    const { rows } = this.props;
    const drows = [];
    const { page, pageSize } = this.state;
    const start = page * pageSize;
    const end = Math.min(start + pageSize, rows.length);
    for (let i = start; i < end; i++) drows.push(rows[i]);
    return drows.map(this.renderRow);
  }

  renderRow = (row, i) => {
    const { metadata } = this.props;
    return (
      <tr key={i}>
        {metadata.fields.map((field, j) => {
          return (
            <td key={j} className={field.type.branchName}>
              {row[field.name]}
            </td>
          );
        })}
      </tr>
    );
  };

  humanSize(bytes) {
    if (bytes >= 1073741824) {
      bytes = (bytes / 1073741824).toFixed(2) + " GB";
    } else if (bytes >= 1048576) {
      bytes = (bytes / 1048576).toFixed(2) + " MB";
    } else if (bytes >= 1024) {
      bytes = (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes > 1) {
      bytes = bytes + " bytes";
    } else if (bytes === 1) {
      bytes = bytes + " byte";
    } else {
      bytes = "0 bytes";
    }
    return bytes;
  }

  gotoPage = page => {
    this.setState({ page: page });
  };

  changePageSize = pageSize => {
    this.setState({ pageSize: pageSize, page: 0 });
  };
}
