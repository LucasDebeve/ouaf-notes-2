import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";


function StatCard( {main_info, sub_info} ) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {main_info}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {sub_info}
        </Typography>
      </CardContent>
    </Card>
  );
}
StatCard.propTypes = {
  main_info: PropTypes.string,
  sub_info: PropTypes.string,
};

StatCard.defaultProps = {
  main_info: "Title",
  sub_info: "Sub-title",
};

export default StatCard;