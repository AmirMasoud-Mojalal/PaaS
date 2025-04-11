import React, { Component } from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
import TableHeader from "./tableHeader";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class ReportTable extends Component {
  state = {
    pageNum: 0,
    pageCount: this.props.pageSizes ? this.props.pageSizes[0] : 5,
    sortColumn: { field: "", order: "asc" },
  };

  handlePaging = (event, pageNum) => {
    this.setState({ pageNum: pageNum - 1 });
  };

  handleSort = (column) => {
    if (column.content === null) {
      const sortColumn = { ...this.state.sortColumn };
      if (sortColumn.field === column.field) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      } else {
        sortColumn.field = column.field;
        sortColumn.order = "asc";
      }
      this.setState({ sortColumn });
    }
  };

  handleSortIcon = (column) => {
    const { sortColumn } = this.state;
    if (column.field !== sortColumn.field) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  };

  handlePageSize = (e) => {
    this.setState({ pageCount: e.target.value });
  };

  render() {
    const { data, pageSizes } = this.props;
    const columns = data.columns;
    let rows = data.rows;

    const pageCount = this.state.pageCount;
    const count = rows.length;
    if (count < pageCount) this.state.pageNum = 0;

    rows = _.orderBy(
      rows,
      this.state.sortColumn.field,
      this.state.sortColumn.order
    );

    rows = [...rows].slice(
      this.state.pageNum * pageCount,
      (this.state.pageNum + 1) * pageCount
    );

    return (
      <React.Fragment>
        <table className="table table-striped table-bordered table-hover table-sm">
          <TableHeader
            columns={columns}
            onSort={this.handleSort}
            onSortIcon={this.handleSortIcon}
          />
          <TableBody
            columns={columns}
            rows={rows}
            rowID={this.state.pageNum * pageCount}
          />
        </table>
        <TableFooter
          onPaging={this.handlePaging}
          pageCount={pageCount}
          pageNum={this.state.pageNum}
          count={count}
          pageSizes={pageSizes}
          onPageSize={this.handlePageSize}
        />
      </React.Fragment>
    );
  }
}

ReportTable.propTypes = {
  data: PropTypes.object.isRequired,
  pageSizes: PropTypes.array,
};

ReportTable.defaultProps = {
  pageSizes: [5, 10, 15, 20],
};

export default ReportTable;
