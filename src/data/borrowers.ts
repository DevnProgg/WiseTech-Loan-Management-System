
interface RowsProps {
    id: string;
    borrowerName: string;
    phonenumber: string;
    email: string;
    address: string;
    Status: string;
  }
  
  export const rows: RowsProps[] = [
    {
      id: "1",
      borrowerName: "John Doe",
      phonenumber: "0123456789",
      email: "johndoe@example.com",
      address: "123 Main St, Anytown USA",
      Status: "Owing"
    },
    {
      id: "2",
      borrowerName: "Jane Smith",
      phonenumber: "0987654321",
      email: "janesmith@example.com",
      address: "456 Oak St, Anytown USA",
      Status: "Paid"
    },
    {
      id: "3",
      borrowerName: "Bob Johnson",
      phonenumber: "0555555555",
      email: "bobjohnson@example.com",
      address: "789 Elm St, Anytown USA",
      Status: "Owing"
    },
  ];
  