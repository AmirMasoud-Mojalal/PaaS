import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import GridHeader from './gridHeader';
import GridPagination from './gridPagination';
import GridRows from './gridRows';

export default function Grid({
  gridLayout,
  data,
  showPagination,
  routePath,
}) {
  return (
    <div className="container">
      <div className="row mx-1 my-1 fs-6 fw-semibold text-body-secondary justify-content-end">
        <div className="col-2 text-center"></div>
        <div className="col-2 text-center">
          <Link
            to="new"
            data-bs-toggle="tooltip"
            // title={headerPage.logout}
            className="heartbeat"
          >
            <i className="bi bi-plus-circle fs-4 pe-2" />
          </Link>
        </div>
      </div>
      <GridHeader gridLayout={gridLayout} />
      <GridRows data={data} gridLayout={gridLayout} routePath={routePath}/>
      <GridPagination
        showPagination={showPagination}
        pagination={{
          currentPage: data.currentPage,
          totalItems: data.totalItems,
          totalPages: data.totalPages,
        }}
      />
      <Outlet />
    </div>
  );
}
