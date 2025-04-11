import React from 'react';
import { Link } from 'react-router-dom';
import GridColumn from './gridColumn';
import gridRow from './gridRowLable_fa';

export default function GridRow({ gridLayout, row, onRowClick, routePath }) {
  const primaryKeyName = gridLayout.find((col) => col['isPrimaryKey'] == true);

  return (
    <div className="row border-bottom border-warning mx-1 my-1 hover-effect align-items-center">
      {Object.keys(row).map((col, index) => {
        return Object.keys(gridLayout).map((header, index) => {
          return gridLayout[index]['isPrimaryKey'] == false && gridLayout[header]['name'] === col ? (
            <GridColumn
              columnLength={gridLayout[header]['largeBreakpointWidth']}
              columnValue={row[col]}
              key={row[col]}
            />
          ) : null;
        });
        {
          123;
        }
      })}
      <div className="col-md-2 text-center">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-center">
          <Link
            to={`${row[primaryKeyName['name']]}/view`}
            data-bs-toggle="tooltip"
            title={gridRow.view}
            container="body"
            className="heartbeat"
          >
            <i className="bi bi-eye fs-4 pe-2" />
          </Link>
          <Link
            to={`${row[primaryKeyName['name']]}/edit`}
            data-bs-toggle="tooltip"
            title={gridRow.edit}
            className="heartbeat"
          >
            <i className="bi bi-pencil-square fs-4 text-warning pe-2" />
          </Link>
          <Link
            to={`${row[primaryKeyName['name']]}/delete`}
            onClick={() => {
              onRowClick(`${row[primaryKeyName['name']]}/delete`);
            }}
            data-bs-toggle="tooltip"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            title={gridRow.delete}
            className="heartbeat"
          >
            <i className="bi bi-trash fs-4 text-warning pe-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
