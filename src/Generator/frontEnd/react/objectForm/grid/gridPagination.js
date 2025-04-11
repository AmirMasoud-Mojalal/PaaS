import Pagination from 'react-bootstrap/Pagination';

export const GridPagination = () => {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{9}</Pagination.Item>
      <Pagination.Item active>{10}</Pagination.Item>
      <Pagination.Item disabled>{11}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

