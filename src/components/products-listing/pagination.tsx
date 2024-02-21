import { TablePagination } from '@mui/material';
import { useParams } from 'hooks/use-params';
import { FC } from 'react';
import { useMetaStore } from 'store/use-meta-store';

export const Pagination: FC = () => {
  const { setParam } = useParams();
  const { page, per_page, total } = useMetaStore((state) => state.meta);

  return (
    <TablePagination
      component="div"
      count={total}
      page={page - 1}
      onPageChange={(_, newPage) => setParam('page', (newPage + 1).toString())}
      rowsPerPage={per_page}
      onRowsPerPageChange={({ target: { value } }) => {
        setParam('per_page', value);
        setParam('page', '1');
      }}
      rowsPerPageOptions={[2, 5, 10]}
      labelRowsPerPage="Per page"
    />
  );
};
