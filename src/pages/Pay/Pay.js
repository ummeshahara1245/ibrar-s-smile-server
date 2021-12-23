import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth';
import ThumbDownAlt from '@mui/icons-material/ThumbDownAlt';
import paymentImage from '../../images/payment-method.png'
const Pay = () => {
    const {user} = useAuth();
    return (
        <Box sx={{ mx: "auto" }}>
            <Card className="container">
      <CardHeader
        avatar={
          <Card sx={{border: 0, boxShadow: 0}}>
            {
                                user.photoURL?
                                (<img className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src={user?.photoURL} alt="" />)
                            :
                            (<img className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src="https://i.ibb.co/7kCyq0z/no-user-image-icon-0.png" alt="" />)
                            }
          </Card>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={paymentImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          We Are working on paying system. Please wait. We are so sorry for the delay. We are working on this service. This Service will be available soon...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="text.primary">
          Was This Informaton Helpful?
        </Typography>
        <IconButton aria-label="Like">
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton aria-label="Dislike">
          <ThumbDownAlt />
        </IconButton>
      </CardActions>
        <CardContent>
        </CardContent>
    </Card>
        </Box>
    );
};

export default Pay;