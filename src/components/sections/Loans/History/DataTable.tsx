import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import { formatNumber } from 'helpers/formatNumber';
import { Button } from '@mui/material';
import { useUpdateUserActions} from 'Store/Store';
import { useLoanData } from 'Store/Loan';
//import alasql from 'alasql';

const handleClicker = () => {
  useUpdateUserActions.setState({isOpen: true}); 
}
interface TaskOverviewTableProps {
  searchText: string;
}

const DataTable = ({ searchText }: TaskOverviewTableProps) => {
  const apiRef = useGridApiRef<GridApi>();
  const rows = useLoanData((state) => state.loans);
  //const history = alasql<LoanData>('SELECT * FROM ? WHERE loan_status = "Paid"', [rows]);

  useEffect(() => {
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

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
      field: 'borrower_name',
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
              {params.row.borrower_name}
            </Typography>
          </Stack>
        );
      },
      sortComparator: (v1, v2) => v1.localeCompare(v2),
    },
    {
      field: 'amount',
      headerName: 'Loan Amount',
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
      field: 'loan_status',
      headerName: 'Loan Status',
      editable: false,
      align: 'left',
      flex: 2,
      minWidth: 140,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      sortable: false,
      filterable: false,
      flex: 1,
      minWidth: 120,
      renderCell: () => {
        return (
          <Stack height={1} spacing={1.5} alignItems="center" justifyContent="flex-start">
            <Button id="basic-button" onClick={handleClicker} size="small">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Button>
          </Stack>
        );
      }
    }
  ]; 
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
        pagination: { paginationModel: { pageSize: 10 } },
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
      pageSizeOptions={[10]}
    />
  );
};


export default DataTable;