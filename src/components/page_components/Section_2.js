import React from 'react';
import { useState, useEffect } from 'react';
import './Section_2.css';

const Section_2 = ({launch,landing,reflight}) => {

  const [launchCount, setLaunchCount] = useState(0);
  const [landingCount, setLandingCount] = useState(0);
  const [reflightCount, setReflightCount] = useState(0);

  useEffect(() => {
      const launchInterval = setInterval(() => {
        setLaunchCount((prevCount) => {
          if(prevCount>=launch){
            clearInterval(launchInterval);
            return prevCount;
          }
          return prevCount+1;
        });
      }, 10);

      const landingInterval = setInterval(() => {
        setLandingCount((prevCount) => {
          if(prevCount>=landing){
            clearInterval(landingInterval);
            return prevCount;
          }
          return prevCount+1;
        });
      }, 10); // Adjust the interval as per your requirement

      const reflightInterval = setInterval(() => {
        setReflightCount((prevCount) => {
          if(prevCount>=reflight){
            clearInterval(reflightInterval);
            return prevCount;
          }
          return prevCount+1;
        });
      }, 10); // Adjust the interval as per your requirement

      return () => {
        clearInterval(launchInterval);
        clearInterval(landingInterval);
        clearInterval(reflightInterval);
      };
    }, []);




  return (
    <div className="Section_2">
      <div className="columns">
        <div className="column">
          <h1>{launchCount}</h1>
          <p>Total Launches</p>
        </div>
        <div className="column">
          <h1>{landingCount}</h1>
          <p>Total Landings</p>
        </div>
        <div className="column">
          <h1>{reflightCount}</h1>
          <p>Total Reflights</p>
        </div> 
      </div>
      
    </div>
  )
}

export default Section_2
