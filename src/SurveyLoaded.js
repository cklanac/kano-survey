import React, { useState, useEffect } from 'react';
import Survey from './Survey';
import LinearProgress from '@mui/material/LinearProgress';

const SurveyLoader = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/questions');
      const jsonData = await response.json();
      setData({ questions: jsonData });
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? <Survey data={data} /> : <LinearProgress />}
    </div>
  );
};

export default SurveyLoader;
