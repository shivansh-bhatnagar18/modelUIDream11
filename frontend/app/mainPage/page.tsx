'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchDropdown from "../../components/searchDropdown";
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Mainpage() {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',  // Set light mode explicitly
      primary: {
        main: '#1976d2',  // Customize the primary color
      },
      secondary: {
        main: '#ff4081',  // Customize the secondary color
      },
      background: {
        default: '#ffffff',  // Set background for light mode
        paper: '#f5f5f5',
      },
      text: {
        primary: '#000000',
        secondary: '#4f4f4f',
      },},
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              color: '#fff',   // Change text color for Button component in light mode
              backgroundColor: '#7FA601',  // Background color for button
            },
          },
        },
      }
  });
  
  const periodData = [
    {label : "01/01/24 - 01/31/24"},
    {label : "02/01/24 - 02/28/24"},
    {label : "03/01/24 - 03/31/24"},
    {label : "04/01/24 - 04/30/24"},
    {label : "05/01/24 - 05/31/24"},
    {label : "06/01/24 - 06/30/24"},
    {label : "07/01/24 - 07/31/24"},
    {label : "08/01/24 - 08/31/24"},
    {label : "09/01/24 - 09/30/24"},
  ]
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
    // Handle form submission logic here
  };

  const [trainingPeriodStart, setTrainingPeriodStart] = React.useState('');
  const [trainingPeriodEnd, setTrainingPeriodEnd] = React.useState('');
  const [testingPeriodStart, setTestingPeriodStart] = React.useState('');
  const [testingPeriodEnd, setTestingPeriodEnd] = React.useState('');

  const handleTrainingPeriodStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrainingPeriodStart(event.target.value);
  };

  const handleTrainingPeriodEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrainingPeriodEnd(event.target.value);
  };

  const handleTestingPeriodStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTestingPeriodStart(event.target.value);
  };

  const handleTestingPeriodEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTestingPeriodEnd(event.target.value);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div className="h-screen flex justify-center bg-[#000426] flex-wrap opacity-90">
        {/* <img src='/bg.png' alt="logo" className="w-24 h-24 mt-10" /> */}
        <div className="mt-10 font-bold text-white text-8xl text-center w-screen">
          DREAM11
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-white text-5xl">
            SELECT YOUR TRAINING AND
          </div>
          <div className="font-bold text-white text-5xl justify-center">
            TESTING PERIOD
          </div> 
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className='mt-4'>
              <label className="text-white mr-5">Select Training Period:</label>
              <input 
              type="date" 
              value={trainingPeriodStart} 
              onChange={handleTrainingPeriodStartChange} 
              className="mt-2 p-2 rounded bg-white text-black"
              />
              <span className="text-white mx-2">to</span>
              <input 
              type="date" 
              value={trainingPeriodEnd} 
              onChange={handleTrainingPeriodEndChange} 
              className="mt-2 p-2 rounded bg-white text-black"
              />
            </div>
            <div className='mt-4'>
              <label className="text-white mr-5">Select Testing Period:</label>
              <input 
              type="date" 
              value={testingPeriodStart} 
              onChange={handleTestingPeriodStartChange} 
              className="mt-2 p-2 rounded bg-white text-black"
              />
              <span className="text-white mx-2">to</span>
              <input 
              type="date" 
              value={testingPeriodEnd} 
              onChange={handleTestingPeriodEndChange} 
              className="mt-2 p-2 rounded bg-white text-black"
              />
            </div>
            <Button type="submit" variant="contained" color="primary" className="mt-10" onClick={() => setTimeout(() => window.location.href = '/comparison', 10000)}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}