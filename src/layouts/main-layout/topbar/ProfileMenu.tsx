import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';
import Profile from 'assets/images/p.png';
import paths from 'routes/paths';
import { useNavigate } from 'react-router-dom';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
  path: string;
}

const menuItems: MenuItems[] = [
  {
    id: 2,
    title: 'Settings',
    icon: 'mdi:account-cog-outline',
    path: paths.settings
  },
  {
    id: 3,
    title: 'Notifications',
    icon: 'mdi:bell-outline',
    path: paths.notification
  },
  {
    id: 6,
    title: 'Logout',
    icon: 'mdi:logout',
    path: paths.signin
  },
];

const ProfileMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase
        sx={{ ml: 1 }}
        onClick={handleProfileClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        disableRipple
      >
        <Avatar
          src={Profile}
          sx={{
            height: 44,
            width: 44,
            bgcolor: 'primary.main',
          }}
        />
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        sx={{
          mt: 1.5,
          '& .MuiList-root': {
            p: 0,
            width: 230,
          },
          '& .MuiMenu-paper': { p: '0 !important' },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Box p={1}>
          {menuItems.map((item) => {
            return (
              <MenuItem key={item.id} onClick={() => {
                                                        handleProfileMenuClose(); 
                                                        if (item.id != 6){
                                                          navigate(item.path);
                                                          return;
                                                        }
                                                        /*Delete all data*/
                                                        return;
                                                      }} sx={{ py: 1 }}>
                <ListItemIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 'h5.fontSize' }}>
                  <IconifyIcon icon={item.icon} />
                </ListItemIcon>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
        </Box>
      </Menu>
    </>
  );
};

export default ProfileMenu;
