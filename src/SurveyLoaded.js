import React, { useState, useEffect } from 'react';
import Survey from './Survey';

const SurveyLoader = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://cklanac-glowing-winner-69rgjj95xv2rvpw-3001.preview.app.github.dev/questions');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data}
      {/* {data ? <Survey data={data} /> : <p>Loading survey...</p>} */}
    </div>
  );
};

export default SurveyLoader;
