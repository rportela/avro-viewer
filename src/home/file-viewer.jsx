import React from "react";
import FileViewerPagination from "./file-viewer-pagination";
export default class FileViewer extends React.Component {
  state = { offset: 0, limit: 100 };
  render() {
    const { file, metadata } = this.props;
    document.title = file.name;
    return (
      <div id="table-wrapper">
        <div id="table-scroll">
          <h1>{file.name}</h1>
          <table>
            <thead>
              <tr>{metadata.fields.map(this.renderHeader)}</tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
            <tfoot>
              <tr>
                <td colSpan="1000">
                  <FileViewerPagination />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
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
    const { offset, limit } = this.state;
    for (let i = 0; i < limit; i++) drows.push(rows[offset + i]);
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
}
