import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box>
            <AppBar style={{backgroundColor:'#f5f5f5f5',color:'#7202b8'}}>
                <Toolbar>
                    <Typography varient='h6' sx={{flexGrow:1}} align='left' style={{fontWeight:'bolder'}}>Quiz App</Typography>
                    {/* <Button color='inherit'>State</Button> */}
                
                    <Avatar sx={{bgcolor:'#7202b8'}}>A</Avatar>
                    <Button color='inherit'><Link to={'/'}  style={{textDecoration:'none'}}>Tags</Link> </Button>
                    <Button color='inherit'><Link to={'/quiz'}  style={{textDecoration:'none'}}>Quiz</Link></Button>
                    <Button color='inherit'><Link to={'/mod'}  style={{textDecoration:'none'}}>Moderator</Link></Button>
                    {/* <Button color='inherit'><Link to={'/Forms'}  style={{textDecoration:'none'}}>Forms</Link></Button>
                    <Button color='inherit'><Link to={'/Viewdata'}  style={{textDecoration:'none'}}>View</Link></Button> */}


                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar