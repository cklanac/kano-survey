import React from 'react';

const Question = ({ question }) => {
  const { id, question: text } = question;

  return (
    <div>
      <h3>{text}</h3>
      <label>
        <input type="radio" name={`q${id}`} value="1" />
        I like it
      </label>
      <label>
        <input type="radio" name={`q${id}`} value="2" />
        I expect it
      </label>
      <label>
        <input type="radio" name={`q${id}`} value="3" />
        I am neutral
      </label>
      <label>
        <input type="radio" name={`q${id}`} value="4" />
        I can tolerate it
      </label>
      <label>
        <input type="radio" name={`q${id}`} value="5" />
        I dislike it
      </label>
    </div>
  );
};

export default Question;
