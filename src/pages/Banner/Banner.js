import React from 'react';
import Grid from '@mui/material/Grid';
import banner from '../../images/ibrar.png';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './Banner.css'
import { Link } from 'react-router-dom';
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <div style={{height:"500px"}} className='bgimage'>
            <div style={{paddingTop:'70px'}}>
            <Container className='shadow-lg' sx={{ flexGrow: 1,backgroundColor:'#fea87c',height:'400px',borderRadius:'20px',}}>
            <Grid className='mediqe' container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left',height:'524px' }} xs={12} md={6}>
                    <Box style={{marginTop:"-100px"}}>
                        <Typography variant='h4' style={{fontFamily:'Pacifico, cursive'}}>
                            For Your 
                            <br />
                            <b>Baby</b>'s daily
                            <br />
                            <div className="d-flex mx-2">needs <hr style={{width:'100px',height:'2px',marginLeft:'5px',color:'black'}} /></div>
                        </Typography>
                        <h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </h6>
                        <Link className='no-underline' to='/explore'><button className='button-off rounded-full'>Explore our products<i class="fa-solid fa-magnifying-glass ico"></i></button></Link>
                    </Box>
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <img className='ibu' src={banner} alt="" />
                </Grid>
            </Grid>
                

        </Container>
            </div>
        </div>
    );
};

export default Banner;