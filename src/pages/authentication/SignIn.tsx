import { useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import Logo from 'assets/FindWise.png';
import { supabase } from 'data/database';
import { LenderInfo, useLender, useMessages, useSession} from 'Store';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';
import CircularProgress from '@mui/material/CircularProgress';

interface User {
  [key: string]: string;
}

const SignIn = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const{addMessage} = useMessages();
  const {setLender} = useLender();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const {data, error} = await supabase.from("Lenders").select(
        "lender_id, business_name, phone_number, email_address, interest_rate, username, password"
      ).eq("username", user["email"]).eq("password", user["password"]);
      if (error) {
          throw error;
      }
      const lender : LenderInfo = data![0];
      setLender(lender)
      
      addMessage({message: "Login successful", serverity: "success"})
      useSession.setState({isLogged : true})
      navigate(paths.dashboard)
  }
  catch(error){
      addMessage({message: "An unknown error occurred", serverity: "error"});
  }
  };

  return (
    <Stack mx="auto" direction="column" alignItems="center" width={1} maxWidth={450}>
      <ButtonBase LinkComponent={Link} href="/" sx={{ mt: 6 }} disableRipple>
        <Image src={Logo} alt="logo" height={92} width={92} />
      </ButtonBase>
      <Typography mt={4} variant="h2" fontWeight={600}>
        Sign In
      </Typography>

      <Divider sx={{ my: 4.5 }}>Welcome</Divider>

      <Box component="form" onSubmit={(e) => {handleSubmit(e); setLoading(true);}}>
        <TextField
          id="email"
          name="email"
          type="text"
          color="secondary"
          label="Username"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="mail@example.com"
          sx={{ mt: 3 }}
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          color="secondary"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Min. 8 characters"
          autoComplete="current-password"
          sx={{ mt: 6 }}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: user.password ? 1 : 0,
                  pointerEvents: user.password ? 'auto' : 'none',
                }}
              >
                <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ border: 'none', bgcolor: 'transparent !important' }}
                  edge="end"
                >
                  <IconifyIcon
                    icon={showPassword ? 'mdi:visibility' : 'mdi:visibility-off'}
                    color="neutral.main"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/*<Stack mt={1.5} alignItems="center" justifyContent="space-between">
          <FormControlLabel
            control={<Checkbox id="checkbox" name="checkbox" size="large" color="primary" />}
            label="Remember me"
            sx={{ ml: -0.75 }}
          />
          <Link href={paths.resetPassword} fontSize="body2.fontSize" fontWeight={600}>
            Reset password?
          </Link>
        </Stack>*/}
        {
          loading ? <center><CircularProgress /></center> : <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }} fullWidth>
          Sign In
        </Button>
        }
      </Box>
    </Stack>
  );
};

export default SignIn;
