import * as React from 'react';
import {Button} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import { useOpenLogin } from 'Store/Store';
import IconifyIcon from 'components/base/IconifyIcon';
import Link  from "@mui/material/Link" 
import Logo from 'assets/wise tech.png';
import Image from 'components/base/Image';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
//import { Authenticate } from 'data/algorithms';

/*interface User {
    [key: string]: string;
}*/

export default function Login() {
    const open: boolean = useOpenLogin((state) => (state.isOpen));
    //const [user, setUser] = React.useState<User>({ email: '', password: '' });
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    /*const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };*/
    
    const handleSubmit = () => {
        setLoading(true);
        useOpenLogin.setState({isOpen : false});
        setLoading(false);
        setEmail('');
        setPassword('');
    };

    const handleClose  = () => {
        useOpenLogin.setState({isOpen : true})
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} aria-labelledby="Login" aria-describedby="Login" >
                <DialogContent>
                    <Stack mx="auto" direction="column" alignItems="center" width={1} maxWidth={450}>
                        <ButtonBase LinkComponent={Link} href="/" sx={{ mt: 6 }} disableRipple>
                            <Image src={Logo} alt="logo" height={92} width={92} />
                        </ButtonBase>
                        <Typography mt={4} variant="h2" fontWeight={600}>
                            Sign In
                        </Typography>

                        <Divider sx={{ my: 4.5 }}>Welcome</Divider>

                        <Box component="form">
                            <TextField
                            id="email"
                            name="email"
                            type="text"
                            color="secondary"
                            label="Username"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
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
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
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
                                    opacity: password ? 1 : 0,
                                    pointerEvents: password ? 'auto' : 'none',
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

                            <Stack mt={1.5} alignItems="center" justifyContent="space-between">
                            {/*<FormControlLabel
                                control={<Checkbox id="checkbox" name="checkbox" size="large" color="secondary" />}
                                label="Remember me"
                                sx={{ ml: -0.75 }}
                            />
                            <Link href={paths[404]} fontSize="body2.fontSize" fontWeight={600}>
                                Reset password?
                            </Link>*/}
                            </Stack>
                            {
                            loading ? <center><CircularProgress style={{marginTop : "10%"}} /></center> : <Button variant="contained" size="large" sx={{ mt: 3 }} fullWidth onClick={handleSubmit} >
                            Sign In
                            </Button>
                            }
                        </Box>
                        </Stack>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
