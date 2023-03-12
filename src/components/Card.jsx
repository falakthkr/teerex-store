import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 151 }}
        image={props.props.imageURL}
        alt="Live from space album cover"
      />
      <Box>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.props.name}
          </Typography>
          <br />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.props.currency} {props.props.price}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ alignItems: 'right', pl: 1, pb: 1 }}>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
      </Box>
    </Card>
  );
}