import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Box, Typography } from '@mui/material';

const Question = ({ question }) => {
  const { id, question: text } = question;

  return (
    <Box mt={4}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography variant="h6" gutterBottom>
            {text}
          </Typography>
        </FormLabel>
        <RadioGroup row name={`q${id}`}>
          <FormControlLabel value="1" control={<Radio />} label="I like it" />
          <FormControlLabel value="2" control={<Radio />} label="I expect it" />
          <FormControlLabel value="3" control={<Radio />} label="I am neutral" />
          <FormControlLabel value="4" control={<Radio />} label="I can tolerate it" />
          <FormControlLabel value="5" control={<Radio />} label="I dislike it" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Question;
