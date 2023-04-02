import React from 'react';
import Question from './Question';
import { Typography, Container, Box, Button } from '@mui/material';

const Survey = ({ data }) => {
  const { questions } = data;

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={4}>
        <Typography variant="h4" gutterBottom>
          Kano Model Survey
        </Typography>
      </Box>
      <form>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Survey;
