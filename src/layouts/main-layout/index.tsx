import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Footer from './footer';
import FAB from 'components/base/FAB';
import AddLoan from 'pages/AddLoan';
import Updateuser from 'pages/UpdateUser';

interface FabStyle {
  position: 'fixed';
  bottom: number;
  right: number;
}

const fabStyle : FabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
};

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const [expand, setExpand] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const drawerWidth = 240;
  const miniDrawerWidth = 90;

  const MainUI = <Stack>
  <Sidebar
    expand={expand}
    mobileOpen={mobileOpen}
    setMobileOpen={setMobileOpen}
    drawerWidth={drawerWidth}
    miniDrawerWidth={miniDrawerWidth}
  />
  <Box component="main" flexGrow={1} sx={{ overflowX: 'hidden' }}>
    <Topbar
      expand={expand}
      mobileOpen={mobileOpen}
      setExpand={setExpand}
      setMobileOpen={setMobileOpen}
      drawerWidth={drawerWidth}
      miniDrawerWidth={miniDrawerWidth}
    />
    <Box mt={12}>{children}
      <AddLoan />
      <Updateuser />
    <FAB styles={fabStyle} />
    </Box>
    <Footer />
  </Box>
</Stack>

  return (
    <>
    { MainUI }
    </>
  );
};

export default MainLayout;
