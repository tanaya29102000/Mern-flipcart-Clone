
// import { AppBar, Toolbar, Box, Typography, IconButton, styled } from '@mui/material';
// import { Menu } from '@mui/icons-material';
// import { Link } from 'react-router-dom';


// import CustomButtons from './CustomButton';
// import Search from './Search';

// const StyledHeader = styled(AppBar)`
//     background: #2874f0;
//     height: 55px;
// `;

// const Component = styled(Link)`
//     margin-left: 12%;
//     line-height: 0;
//     color: #FFFFFF;
//     text-decoration: none;
// `;

// const SubHeading = styled(Typography)`
//     font-size: 10px;
//     font-style: italic;
// `;

// const PlusImage = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft: 4,
// });

// const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
//     margin: '0 5% 0 auto', 
//     [theme.breakpoints.down('sm')]: {
//         display: 'none',
//     }
// }));

// const Header = () => {
//     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
//     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

//     return (
//         <StyledHeader position="fixed">
//             <Toolbar style={{ minHeight: 55 }}>
//                 <IconButton color="inherit">
//                     <Menu />
//                 </IconButton>

//                 <Component to='/'>
//                     <img src={logoURL} style={{ width: 75 }} alt="Logo" />
//                     <Box component="span" style={{ display: 'flex' }}>
//                         <SubHeading>
//                             Explore&nbsp;
//                             <Box component="span" style={{ color: '#FFE500' }}>
//                                 Plus
//                             </Box>
//                         </SubHeading>
//                         <PlusImage src={subURL} alt="Plus Icon" />
//                     </Box>
//                 </Component>
//                 <Search />
//                 <CustomButtonWrapper>
//                     <CustomButtons />
//                 </CustomButtonWrapper>
//             </Toolbar>
//         </StyledHeader>
//     );
// }

// export default Header;
import { AppBar, Toolbar, Box, Typography, IconButton, styled, Badge } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButton';
import Search from './Search';
import { useContext } from 'react'; // Import useContext to access context
import { DataContext } from '../../context/DataProvider'; // Import your DataContext

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
});

const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}));

const CartLink = styled(Link)`
    margin-left: auto;
    text-decoration: none;
    color: white;
`;

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const { cartCount } = useContext(DataContext); // Access cartCount from context

    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <IconButton color="inherit">
                    <Menu />
                </IconButton>

                <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} alt="Logo" />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="Plus Icon" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>

                {/* Cart Link with Badge */}
                <CartLink to="/cart">
                    <Badge badgeContent={cartCount} color="secondary">
                        <Typography variant="h6">Cart</Typography>
                    </Badge>
                </CartLink>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;
