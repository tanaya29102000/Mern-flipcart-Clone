
import React from 'react';
import { Grid, styled } from '@mui/material'; 
import Slid from "./Slid";

// Import Grid from @mui/material

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const Wrapper = styled(Grid)` 
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',

        
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
        
            <Wrapper container>
                {
                    ImageURL.map((image) => (
                        <Grid item lg={4} md={4} sm={12} xs={12} key={image}>
                            <img src={image} alt="Mid section" style={{ width: '100%' }} />
                        </Grid>
                    ))
                }
                
            </Wrapper>
            <Slid></Slid>
            <Slid></Slid>
            <Image src={url} alt="Mid section banner" />
        </>
    );
}

export default MidSection;
