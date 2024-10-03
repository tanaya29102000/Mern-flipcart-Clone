
// import React, { useState, useEffect, useContext } from 'react';
// import { Dialog, TextField, Box, Typography, Button, styled, DialogContent } from '@mui/material';
// import { authenticateLogin, authenticateSignup } from '../../service/api';
// import { DataContext } from '../../context/DataProvider';

// const Component = styled(DialogContent)`
//     height: 80vh;
//     width: 100vh;
//     padding: 0;
//     padding-top: 0;
// `;

// const LoginButton = styled(Button)`
//     text-transform: none;
//     background: #FB641B;
//     color: #fff;
//     height: 48px;
//     border-radius: 2px;
// `;

// const RequestOTP = styled(Button)`
//     text-transform: none;
//     background: #fff;
//     color: #2874f0;
//     height: 48px;
//     border-radius: 2px;
//     box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
// `;

// const Text = styled(Typography)`
//     color: #878787;
//     font-size: 12px;
// `;

// const CreateAccount = styled(Typography)`
//     margin: auto 0 5px 0;
//     text-align: center;
//     color: #2874f0;
//     font-weight: 600;
//     font-size: 14px;
//     cursor: pointer;
// `;

// const Wrapper = styled(Box)`
//     padding: 25px 35px;
//     display: flex;
//     flex: 1;
//     overflow: auto;
//     flex-direction: column;
//     & > div, & > button, & > p {
//         margin-top: 20px;
//     }
// `;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `;

// const Image = styled(Box)`
//     background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
//     width: 30%;
//     height: 85%;
//     padding: 45px 35px;
//     & > p, & > h5 {
//         color: #FFFFFF;
//         font-weight: 600;
//     }
// `;

// const loginInitialValues = {
//     username: '',
//     password: ''
// };

// const signupInitialValues = {
//     firstname: '',
//     lastname: '',
//     username: '',
//     email: '',
//     password: '',
//     phone: ''
// };

// const accountInitialValues = {
//     login: {
//         view: 'login',
//         heading: 'Login',
//         subHeading: 'Get access to your Orders, Wishlist and Recommendations'
//     },
//     signup: {
//         view: 'signup',
//         heading: "Looks like you're new here",
//         subHeading: 'Signup to get started'
//     }
// };

// const LoginDialog = ({ open, setOpen }) => {
//     const [login, setLogin] = useState(loginInitialValues);
//     const [signup, setSignup] = useState(signupInitialValues);
//     const [error, showError] = useState(false);
//     const { setAccount } = useContext(DataContext);
//     const [currentAccountView, setCurrentAccountView] = useState(accountInitialValues.login);

//     useEffect(() => {
//         showError(false);
//     }, [login]);

//     const onValueChange = (e) => {
//         setLogin({ ...login, [e.target.name]: e.target.value });
//     };

//     const onInputChange = (e) => {
//         setSignup({ ...signup, [e.target.name]: e.target.value });
//     };

//     const loginUser = async () => {
//         try {
//             let response = await authenticateLogin(login);
//             if (!response) {
//                 showError(true);
//             } else {
//                 showError(false);
//                 handleClose();
//                 setAccount(login.username);
//             }
//         } catch (error) {
//             showError(true);
//         }
//     };

//     const signupUser = async () => {
//         try {
//             let response = await authenticateSignup(signup);
//             if (!response) {
//                 showError(true);
//                 return;
//             }
//             handleClose();
//             setAccount(signup.firstname);
//         } catch (error) {
//             showError(true);
//         }
//     };

//     const toggleAccount = (accountView) => {
//         setCurrentAccountView(accountView);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         toggleAccount(accountInitialValues.login);
//     };

//     return (
//         <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
//             <Component>
//                 <Box style={{ display: 'flex', height: '100%' }}>
//                     <Image>
//                         <Typography variant="h5">{currentAccountView.heading}</Typography>
//                         <Typography style={{ marginTop: 10 }}>{currentAccountView.subHeading}</Typography>
//                     </Image>
//                     {currentAccountView.view === 'login' ? (
//                         <Wrapper>
//                             <TextField variant="standard" onChange={onValueChange} name="username" label="Enter Username" />
//                             {error && <Error>Invalid Username or Password</Error>}
//                             <TextField variant="standard" onChange={onValueChange} name="password" label="Enter Password" type="password" />
//                             <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
//                             <LoginButton onClick={loginUser}>Login</LoginButton>
//                             <Text style={{ textAlign: 'center' }}>OR</Text>
//                             <RequestOTP>Request OTP</RequestOTP>
//                             <CreateAccount onClick={() => toggleAccount(accountInitialValues.signup)}>New to Flipkart? Create an account</CreateAccount>
//                         </Wrapper>
//                     ) : (
//                         <Wrapper>
//                             <TextField variant="standard" onChange={onInputChange} name="firstname" label="Enter Firstname" />
//                             <TextField variant="standard" onChange={onInputChange} name="lastname" label="Enter Lastname" />
//                             <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" />
//                             <TextField variant="standard" onChange={onInputChange} name="email" label="Enter Email" />
//                             <TextField variant="standard" onChange={onInputChange} name="password" label="Enter Password" type="password" />
//                             <TextField variant="standard" onChange={onInputChange} name="phone" label="Enter Phone" />
//                             <LoginButton onClick={signupUser}>Continue</LoginButton>
//                         </Wrapper>
//                     )}
//                 </Box>
//             </Component>
//         </Dialog>
//     );
// };

// export default LoginDialog;
import React, { useState, useEffect, useContext } from 'react';
import { Dialog, TextField, Box, Typography, Button, styled, DialogContent } from '@mui/material';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(DialogContent)`
    height: 80vh;
    width: 100vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 30%;
    height: 85%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600;
    }
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};

const LoginDialog = ({ open, setOpen }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState(false);
    const { setAccount } = useContext(DataContext);
    const [currentAccountView, setCurrentAccountView] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        try {
            let response = await authenticateLogin(login);
            if (!response) {
                showError(true);
            } else {
                showError(false);
                handleClose();
                setAccount(login.username);
            }
        } catch (error) {
            showError(true);
        }
    };

    const signupUser = async () => {
        try {
            let response = await authenticateSignup(signup);
            if (!response) {
                showError(true);
                return;
            }
            // Switch to the login view instead of closing the dialog
            toggleAccount(accountInitialValues.login);
        } catch (error) {
            showError(true);
        }
    };

    const toggleAccount = (accountView) => {
        setCurrentAccountView(accountView);
    };

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{currentAccountView.heading}</Typography>
                        <Typography style={{ marginTop: 10 }}>{currentAccountView.subHeading}</Typography>
                    </Image>
                    {currentAccountView.view === 'login' ? (
                        <Wrapper>
                            <TextField variant="standard" onChange={onValueChange} name="username" label="Enter Username" />
                            {error && <Error>Invalid Username or Password</Error>}
                            <TextField variant="standard" onChange={onValueChange} name="password" label="Enter Password" type="password" />
                            <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <LoginButton onClick={loginUser}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleAccount(accountInitialValues.signup)}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField variant="standard" onChange={onInputChange} name="firstname" label="Enter Firstname" />
                            <TextField variant="standard" onChange={onInputChange} name="lastname" label="Enter Lastname" />
                            <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" />
                            <TextField variant="standard" onChange={onInputChange} name="email" label="Enter Email" />
                            <TextField variant="standard" onChange={onInputChange} name="password" label="Enter Password" type="password" />
                            <TextField variant="standard" onChange={onInputChange} name="phone" label="Enter Phone" />
                            <LoginButton onClick={signupUser}>Continue</LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
