import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import sitemap from 'routes/sitemap';
import Logo from 'assets/wise tech bright.png';
import { useLocation } from 'react-router-dom';
import { Tooltip } from '@mui/material';

interface DrawerItemsProps {
  expand: boolean;
}

const DrawerItems = ({ expand }: DrawerItemsProps) => {
  const location = useLocation();
  return (
    <>
      <Stack
        py={4}
        position="sticky"
        top={0}
        alignItems="center"
        justifyContent="center"
        bgcolor="info.lighter"
        zIndex={1200}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Stack
            direction={expand ? 'row' : 'column'}
            spacing={expand ? 1.75 : 1.25}
            alignItems="center"
            justifyContent="center"
          >
            <Image src={Logo} alt="logo" height={100} width={100} />
          </Stack>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mb: 30, pt: 1.5 }}>
        {sitemap.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              href={item.path}
              sx={(theme) => ({
                minHeight: 48,
                background:
                  item.path === location.pathname
                    ? `linear-gradient(90deg, ${theme.palette.gradients.secondary.main} 0%, ${theme.palette.gradients.secondary.state} ${expand ? '22.5%' : '62%'})`
                    : 'info.lighter',
              })
            }>
              <Tooltip title={item.subheader} arrow>
              <ListItemIcon sx={{ width: 48 }}>
                {item.icon &&
                  (item.messages ? (
                    <Badge
                      variant="dot"
                      sx={(theme) => ({
                        '& .MuiBadge-badge': {
                          top: 4,
                          right: 3,
                          border: 2,
                          borderColor: theme.palette.info.lighter,
                          bgcolor: expand ? 'text.disabled' : 'error.dark',
                        },
                      })}
                    >
                      <IconifyIcon
                        icon={item.icon}
                        color={item.path === location.pathname ? 'primary.main' : 'text.disabled'}
                      />
                    </Badge>
                  ) : (
                    <IconifyIcon
                      icon={item.icon}
                      color={item.path === location.pathname  ? 'primary.main' : 'text.disabled'}
                    />
                  ))}
              </ListItemIcon>
              </Tooltip>

              <ListItemText
                primary={item.subheader}
                sx={[
                  expand
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    '& .MuiListItemText-primary': {
                      color: item.path === location.pathname  ? 'primary.darker' : 'text.disabled',
                    },
                  },
                ]}
              />
              {item.messages && (
                <Chip
                  label={item.messages}
                  color="error"
                  size="small"
                  sx={{
                    minWidth: 32,
                    height: 24,
                    opacity: expand ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerItems;
