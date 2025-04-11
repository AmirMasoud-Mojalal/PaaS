import * as React from 'react';
import { Link } from 'react-router-dom';
import gridRow from './gridRowLable_fa';

export default function GridPagination({ showPagination, pagination }) {
  //  1-base currentPage
  const currentPage = pagination.currentPage + 1;
  const totalPages = pagination.totalPages;

  const hasFirstPage = currentPage > 1;
  const firstPage = 1;

  const hasPreviousPage = currentPage > 1;
  const previousPage = currentPage - 1;

  const hasNextPage = currentPage < totalPages;
  const nextPage = currentPage + 1;

  const hasLastPage = currentPage < totalPages;
  const lastPage = totalPages;

  //  0-base currentPage

  // const currentPage = pagination.currentPage;
  // const totalPages = pagination.totalPages;
  // const hasNextPage = currentPage + 1 < totalPages;
  // const nextPage = currentPage + 1;
  // const hasPreviousPage = currentPage > 0;
  // const previousPage = currentPage - 1;
  // const firstPage = 0;
  // const lastPage = totalPages - 1;
  // const hasFirstPage = currentPage > 0;
  // const hasLastPage = currentPage < lastPage;

  return (
    showPagination && (
      <nav aria-label="Page navigation example with icons">
        <ul className="pagination justify-content-center pagination-sm">
          <li className={`page-item ${hasFirstPage ? '' : 'disabled'}`}>
            <Link
              // onClick={() => {
              //   return null;
              // }}
              to={`?page=${firstPage}`}
              // to={() => {}}
              data-bs-toggle="tooltip"
              title={gridRow.first}
              container="body"
              className="page-link heartbeat"
            >
              <span aria-hidden="true">&#8249;&lsaquo;</span>
            </Link>
          </li>
          <li className={`page-item ${hasPreviousPage ? '' : 'disabled'}`}>
            <Link
              to={`?page=${previousPage}`}
              data-bs-toggle="tooltip"
              title={gridRow.previous}
              container="body"
              className="page-link heartbeat"
            >
              <span aria-hidden="true">&lsaquo;</span>
            </Link>
          </li>

          <li className="page-item">
            <a className="page-link" href="#">
              <span aria-hidden="true">{pagination.currentPage + 1}</span>
              <span aria-hidden="true">&nbsp;از&nbsp;</span>
              <span aria-hidden="true">{lastPage}</span>
            </a>
          </li>

          <li className={`page-item ${hasNextPage ? '' : 'disabled'}`}>
            <Link
              to={`?page=${nextPage}`}
              data-bs-toggle="tooltip"
              title={gridRow.next}
              container="body"
              className="page-link heartbeat"
            >
              <span aria-hidden="true">&#8250;</span>
            </Link>
          </li>
          <li className={`page-item ${hasLastPage ? '' : 'disabled'}`}>
            <Link
              to={`?page=${lastPage}`}
              data-bs-toggle="tooltip"
              title={gridRow.last}
              container="body"
              className="page-link heartbeat"
            >
              <span aria-hidden="true">&#8250;&rsaquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
}
