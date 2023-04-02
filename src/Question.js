import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
  Typography,
  Grid,
} from '@mui/material';

const Question = ({ question }) => {
  const { id, feature } = question;

  const positive = "How would you feel if you had this feature?";
  const negative = "How would you feel if you did not have this feature?";

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        {feature}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{positive}</FormLabel>
            <RadioGroup row name={`q${id}-positive`}>
              <FormControlLabel value="1" control={<Radio />} label="I like it" />
              <FormControlLabel value="2" control={<Radio />} label="I expect it" />
              <FormControlLabel value="3" control={<Radio />} label="I am neutral" />
              <FormControlLabel value="4" control={<Radio />} label="I can tolerate it" />
              <FormControlLabel value="5" control={<Radio />} label="I dislike it" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{negative}</FormLabel>
            <RadioGroup row name={`q${id}-negative`}>
              <FormControlLabel value="1" control={<Radio />} label="I like it" />
              <FormControlLabel value="2" control={<Radio />} label="I expect it" />
              <FormControlLabel value="3" control={<Radio />} label="I am neutral" />
              <FormControlLabel value="4" control={<Radio />} label="I can tolerate it" />
              <FormControlLabel value="5" control={<Radio />} label="I dislike it" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Question;
