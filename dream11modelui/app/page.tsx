'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchDropdown from "../components/searchDropdown";
import { Button } from '@mui/material';

export default function Home() {
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

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div className="h-screen flex justify-center bg-[#000426] flex-wrap opacity-90">
        {/* <img src='/bg.png' alt="logo" className="w-24 h-24 mt-10" /> */}
        <div className="mt-10 font-bold text-5xl text-center w-screen">
          DREAM11
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-20 font-bold text-2xl">
            SELECT YOUR TRAINING AND TESTING PERIOD
          </div> 
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className='pt-10'>
              <SearchDropdown label="Training Period" periodData={periodData} />
            </div>
            <div className='pt-1'>
              <SearchDropdown label="Testing Period" periodData={periodData} />
            </div>
            <Button type="submit" variant="contained" color="primary" className="mt-10">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}
