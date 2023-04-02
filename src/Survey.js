import React from 'react';
import Question from './Question';

const Survey = ({ data }) => {
  const { questions } = data;

  return (
    <div>
      <h1>Kano Model Survey</h1>
      <form>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;
