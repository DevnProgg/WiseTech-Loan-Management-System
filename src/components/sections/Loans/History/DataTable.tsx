import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import { formatNumber } from 'helpers/formatNumber';
import { rows } from 'data/History';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'id',
    headerName: 'Tracking no',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 120,
  },
  {
    field: 'borrowerName',
    headerName: 'Borrower Name',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 220,
    valueGetter: (params:  string) => {
      return params;
    },
    renderCell: (params) => {
      return (
        <Stack height={1} spacing={1.5} alignItems="center" justifyContent="flex-start">
          <Typography variant="caption" fontWeight={600}>
            {params.row.borrowerName}
          </Typography>
        </Stack>
      );
    },
    sortComparator: (v1, v2) => v1.localeCompare(v2),
  },
  {
    field: 'price',
    headerName: 'Price',
    headerAlign: 'left',
    editable: false,
    flex: 1,
    minWidth: 140,
    renderCell: (params) => (
      <Typography variant="caption">
        {formatNumber(params.value, {
          style: 'currency',
          currency: 'LSL',
          maximumFractionDigits: 2,
        })}
      </Typography>
    ),
  },
  {
    field: 'Status',
    headerName: 'Status',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 140,
  },
];

interface TaskOverviewTableProps {
  searchText: string;
}

const DataTable = ({ searchText }: TaskOverviewTableProps) => {
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

  return (
    <DataGrid
      apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={rows}
      rowHeight={50}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 4 } },
      }}
      autosizeOptions={{
        includeOutliers: true,
        includeHeaders: false,
        outliersFactor: 1,
        expand: true,
      }}
      slots={{
        pagination: DataGridFooter,
      }}
      pageSizeOptions={[4]}
    />
  );
};

export default DataTable;
