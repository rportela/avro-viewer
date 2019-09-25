import React from "react";

export default class FileViewerPagination extends React.Component {
  render() {
    const { pageSize = 100, pageCount = 1, page } = this.props;
    return (
      <form>
        <button type="button" onClick={this.gotoFirstPage}>
          &lt;&lt;
        </button>
        <button type="button" onClick={this.gotoPreviousPage}>
          &lt;
        </button>
        <select value={pageSize} onChange={this.changePageSize}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
          <option>200</option>
          <option>500</option>
          <option>1000</option>
        </select>
        <label>
          Records per page, showing page {page + 1} of {pageCount} pages
        </label>
        <button type="button" onClick={this.gotoNextPage}>
          &gt;
        </button>
        <button type="button" onClick={this.gotoLastPage}>
          &gt;&gt;
        </button>
      </form>
    );
  }

  gotoFirstPage = () => {
    const { gotoPage } = this.props;
    gotoPage && gotoPage(0);
  };

  gotoLastPage = () => {
    const { gotoPage, pageCount } = this.props;
    gotoPage && gotoPage(pageCount - 1);
  };

  gotoPreviousPage = () => {
    const { gotoPage, page } = this.props;
    gotoPage && page > 0 && gotoPage(page - 1);
  };

  gotoNextPage = () => {
    const { gotoPage, page, pageCount } = this.props;
    gotoPage && page < pageCount - 1 && gotoPage(page + 1);
  };

  changePageSize = e => {
    const pageSize = parseInt(e.target.value);
    const { changePageSize } = this.props;
    changePageSize && changePageSize(pageSize);
  };
}
