import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
import TableHeader from "./tableHeader";
import _ from "lodash";
import { persianToArabic } from "../../helper/utils/string";

class BKODataTable extends Component {
  state = {
    pageNum: 1,
    pageCount: this.props.rowsPerPageOptions
      ? this.props.rowsPerPageOptions[0]
      : 5,
    sortColumn: { field: "", order: "asc" },
  };

  handlePaging = (event, pageNum) => {
    console.log(pageNum);
    this.setState({ pageNum: pageNum });
  };

  handleSort = (column) => {
    if (!column.content) {
      console.log(column);
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
    const {
      columns,
      rowsPerPageOptions,
      value,
      paginator,
      globalFilter,
      ...others
    } = this.props;
    let rows = [...value];

    const colFields = columns.map((item) => item["field"]);
    rows = _.filter(rows, (row) => {
      for (let i = 0; i < colFields.length; i++) {
        if (
          row[colFields[i]] &&
          row[colFields[i]].toString().includes(persianToArabic(globalFilter))
        )
          return row;
      }
    });
    // rows = rows.filter((row) =>
    //   _.values(row).some((col) => col.toString().includes(globalFilter))
    // );

    const pageCount = this.state.pageCount;
    const count = rows.length;
    if (count < pageCount) this.state.pageNum = 1;

    const totalCount = Math.ceil(count / pageCount);
    if (this.state.pageNum > totalCount && count > 0) {
      this.state.pageNum = totalCount;
    }

    rows = _.orderBy(
      rows,
      this.state.sortColumn.field,
      this.state.sortColumn.order
    );

    rows = [...rows].slice(
      (this.state.pageNum - 1) * pageCount,
      this.state.pageNum * pageCount
    );

    return (
      <React.Fragment>
        <Table striped bordered hover {...others}>
          <TableHeader
            columns={columns}
            onSort={this.handleSort}
            onSortIcon={this.handleSortIcon}
          />
          <TableBody
            columns={columns}
            rows={rows}
            rowID={(this.state.pageNum - 1) * pageCount}
          />
        </Table>
        {paginator && (
          <TableFooter
            onPaging={this.handlePaging}
            pageCount={pageCount}
            pageNum={this.state.pageNum}
            count={count}
            pageSizes={rowsPerPageOptions}
            onPageSize={this.handlePageSize}
          />
        )}
      </React.Fragment>
    );
  }
}

BKODataTable.propTypes = {
  value: PropTypes.array.isRequired,
  rowsPerPageOptions: PropTypes.array,
};

BKODataTable.defaultProps = {
  rowsPerPageOptions: [5, 10, 15, 20],
};

export default BKODataTable;
