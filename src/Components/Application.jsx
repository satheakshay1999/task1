import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import "../App.css"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const Application = () => {
  const [counter, setCounter] = useState({ a: 3, b: 9, c: 10}); 
  const [showDiv, setShowDiv] = useState(false) // default set to close 

  // Function for toggling 
  const toggleDiv = () =>{
      console.log("ToggleDIv is Clicked")
      setShowDiv(!showDiv)
  }

  // Function to increse the counter 
  const incrementCounter = (key) => {
    setCounter((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  // Function to Decrese the counter 
  const decrementCounter = (key) => {
    setCounter((prevState) => {
      if (prevState[key] > 0) {
        return {
          ...prevState,
          [key]: prevState[key] - 1,
        };
      }
      return prevState;
    });
  };
  console.log(Object.values(counter));
  const chartData = {
    labels: Object.keys(counter),
    datasets: [
      {
        label: 'Counter Values',
        data: Object.values(counter),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    
  };

  return (
    <div className="mt-5 container border" id="container-block">
      <div className="justify-conetnt-center" style={{margin: "20px 0 0 0"}}>
        {Object.entries(counter).map(([key, value]) => (
          <div key={key} className="d-flex justify-content-between mt-2" style={{width: '300px' , height:"50px"}}>
              <div className='border' style={{width: '50px'}}>
                  <h1 className='ml-auto mr-auto text-center'> {key}</h1>
              </div>  
              <div className='bg-primary' style={{width: '50px'}}>
                  <h1 className='ml-auto mr-auto text-white text-center' >{value}</h1>
              </div>
              <div className='d-flex justify-content-between' style={{width: '100px' , height: '50px'}}>
                  <button className='btn btn-dark mr-8'  onClick={() => incrementCounter(key)}>+</button>
                  <button className='btn btn-dark ml-8'  onClick={() => decrementCounter(key)}>-</button>
              </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mx-2 mt-4" onClick={toggleDiv}>Show Chart</button>
      <div>
      {showDiv && <Bar 
          className="barchart container mt-0 mx-5 "  
          style={{width: '600px' , height: "500px"}}
          width={100}
          height={70}
          data={chartData}
          options={options} />}
        
      </div>
    </div>
  );
};

export default Application;
