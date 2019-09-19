import React from "react";

export default class FileViewerPagination extends React.Component {
  render() {
    return (
      <form>
        <button type="button">&lt;&lt;</button>
        <button type="button">&lt;</button>
        <select>
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
          <option>500</option>
          <option>1000</option>
        </select>
        <label>Records per page</label>
        <button type="button">&gt;</button>
        <button type="button">&gt;&gt;</button>
      </form>
    );
  }
}
