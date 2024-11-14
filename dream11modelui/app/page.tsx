'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchDropdown from "./components/searchDropdown";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  const periodData = [
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
    {label : "10/01/24 - 11/01/24"},
  ]
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className=" h-screen flex justify-center bg-indigo-950 flex-wrap">
      {/* <div className=" bg-ground bg-no-repeat bg-cover bg-center bg-fixed h-screen w-screen absolute bg-opacity-75">
          hgbk
          </div> */}
      <div className="mt-10 font-bold font-barlo text-8xl text-center w-screen">
        DREAM11
      </div>
      <div className="mt-20 font-barlo font-bold text-5xl">
        SELECT YOUR TRAINING AND TESTING PERIOD
      </div>
      <SearchDropdown label="1" periodData={periodData} />
      <SearchDropdown label="2" periodData={periodData} />
      </div>
    </ThemeProvider>
  );
}