import React, { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (count === 190) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default Count;
