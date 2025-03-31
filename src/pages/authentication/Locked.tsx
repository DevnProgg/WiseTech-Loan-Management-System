import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'components/base/Image';
import Logo from 'assets/wise tech bright.png';

const Locked = () => {

  return (
    <Stack py={10} justifyContent="center" height="100vh" width={1}>
      <Stack
        mx={1.5}
        my="auto"
        component={Paper}
        direction="column"
        alignItems="center"
        justifyContent="center"
        height={600}
        width={1}
        maxWidth={600}
        borderRadius={1.5}
      >
        <ButtonBase LinkComponent={Link} href="/" disableRipple>
          <Image src={Logo} alt="logo" height={92} width={92} />
        </ButtonBase>
        <Typography mt={6} variant="h3" fontWeight={600}>
          Renew Your Contract
        </Typography>
        <Box mt={8} width={1} maxWidth={480}>
          <Button variant="contained" size="large" sx={{ mt: 3 }} fullWidth>
            Pay
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Locked;
