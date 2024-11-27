'use client'
import React from 'react'
import SearchDropdown from '@/components/searchDropdown'
import PlayerComponent from '@/components/playerAvatar'
import { Button } from '@mui/material'
import PlayerFormation from '@/components/playerFormation'
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
// Remove fs and path imports as they are not available in the browser environment

const csvFilePath = '/data.csv';

const readCSVData = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      fetch(csvFilePath)
        .then(response => response.text())
        .then(data => {
          Papa.parse(data, {
            header: true,
            complete: (results: Papa.ParseResult<any>) => {
              resolve(results.data);
            },
            error: (error: any) => {
              reject(error);
            },
          });
        })
        .catch(error => reject(error));
    });
};

const readCSVImageData = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    fetch('/names.csv')
      .then(response => response.text())
      .then(data => {
        Papa.parse(data, {
          header: true,
          complete: (results: Papa.ParseResult<any>) => {
            resolve(results.data);
          },
          error: (error: any) => {
            reject(error);
          },
        });
      })
      .catch(error => reject(error));
  });
};

function Comparison() {

  
  const [periodData, setPeriodData] = useState<any[]>([]);
  const [playerDataTeam1, setPlayerDataTeam1] = useState<any[]>([]);
  const [playerDataTeam2, setPlayerDataTeam2] = useState<any[]>([]);
  const [matchDate, setMatchDate] = useState<string>('');
  const [aiPoints, setAiPoints] = useState<number>(0);
  const [realPoints, setRealPoints] = useState<number>(0);
  const [mae, setMae] = useState<number>(0);

  useEffect(() => {
    let selectedMatch: any;
    readCSVData()
      .then((data) => {
        const formattedData = (data as any[]).map((row: any) => ({
          label: row['Match Date'],
          value: row['Match Date'],
        }));
        selectedMatch = data.find((row: any) => row['Match Date'] === matchDate);
        setPeriodData(formattedData);
        // console.log('CSV data:', formattedData);
      })
      .catch((error) => {
        console.error('Error reading CSV data:', error);
      });
    readCSVImageData()
      .then((data) => {
        if (selectedMatch) {
            const playerImages: { [key: string]: string } = {};
            data.forEach((row: any) => {
            playerImages[row['Name']] = row['image_path'];
            });

            const playerPoints1 = [
            { name: selectedMatch['Predicted Player 1'], number: selectedMatch['Predicted Player 1 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 1']] },
            { name: selectedMatch['Predicted Player 2'], number: selectedMatch['Predicted Player 2 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 2']] },
            { name: selectedMatch['Predicted Player 3'], number: selectedMatch['Predicted Player 3 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 3']] },
            { name: selectedMatch['Predicted Player 4'], number: selectedMatch['Predicted Player 4 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 4']] },
            { name: selectedMatch['Predicted Player 5'], number: selectedMatch['Predicted Player 5 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 5']] },
            { name: selectedMatch['Predicted Player 6'], number: selectedMatch['Predicted Player 6 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 6']] },
            { name: selectedMatch['Predicted Player 7'], number: selectedMatch['Predicted Player 7 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 7']] },
            { name: selectedMatch['Predicted Player 8'], number: selectedMatch['Predicted Player 8 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 8']] },
            { name: selectedMatch['Predicted Player 9'], number: selectedMatch['Predicted Player 9 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 9']] },
            { name: selectedMatch['Predicted Player 10'], number: selectedMatch['Predicted Player 10 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 10']] },
            { name: selectedMatch['Predicted Player 11'], number: selectedMatch['Predicted Player 11 Points'], imageSrc: playerImages[selectedMatch['Predicted Player 11']] }
            ];

            const playerPoints2 = [
            { name: selectedMatch['Dream Team Player 1'], number: selectedMatch['Dream Team Player 1 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 1']] },
            { name: selectedMatch['Dream Team Player 2'], number: selectedMatch['Dream Team Player 2 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 2']] },
            { name: selectedMatch['Dream Team Player 3'], number: selectedMatch['Dream Team Player 3 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 3']] },
            { name: selectedMatch['Dream Team Player 4'], number: selectedMatch['Dream Team Player 4 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 4']] },
            { name: selectedMatch['Dream Team Player 5'], number: selectedMatch['Dream Team Player 5 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 5']] },
            { name: selectedMatch['Dream Team Player 6'], number: selectedMatch['Dream Team Player 6 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 6']] },
            { name: selectedMatch['Dream Team Player 7'], number: selectedMatch['Dream Team Player 7 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 7']] },
            { name: selectedMatch['Dream Team Player 8'], number: selectedMatch['Dream Team Player 8 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 8']] },
            { name: selectedMatch['Dream Team Player 9'], number: selectedMatch['Dream Team Player 9 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 9']] },
            { name: selectedMatch['Dream Team Player 10'], number: selectedMatch['Dream Team Player 10 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 10']] },
            { name: selectedMatch['Dream Team Player 11'], number: selectedMatch['Dream Team Player 11 Points'], imageSrc: playerImages[selectedMatch['Dream Team Player 11']] }
            ];
          setPlayerDataTeam1(playerPoints1);
          setPlayerDataTeam2(playerPoints2);
          setAiPoints(selectedMatch['Total Points Predicted']);
          setRealPoints(selectedMatch['Total Dream Team Points']);
          setMae(selectedMatch['MAE']);
          console.log('Player data:', playerPoints1, playerPoints2);
      }
        // console.log('CSV data:', formattedData);
      })
      .catch((error) => {
        console.error('Error reading CSV data:', error);
      });
  }, [matchDate]);
  
  return (
    <div className='flex justify-between bg-[#000426] h-full xl:h-screen flex-col'>   
      <div className='flex flex-col flex-wrap lg:z-50 z-10 items-center'>
        <div className="mt-10 pb-10 font-bold text-8xl text-center">
          DREAM11
        </div>
        <div className='flex flex-row justify-center'>
        <div className='w-min flex justify-center bg-[#D9D9D9] rounded-l'>
          <Autocomplete
            disablePortal
            id="select-period"
            options={periodData}
            sx={{ width: 300 }}
            renderInput={(params: any) => <TextField {...params} label="Select Match" />}
            value={matchDate}
            onChange={(event: any, newValue: { label: string, value: string } | null) => {
              setMatchDate(newValue ? newValue.value || '' : '');
            }}
          />
        </div>
        </div>
        <div className='data flex flex-col flex-wrap justify-center p-10'>
          <div className='title block text-center text-5xl text-[#757575] font-bold'>FANTASY SCORE</div>
          <div className='flex flex-wrap justify-center'>
          <div className='left text-right'>
            <div className='score font-bold text-9xl text-[#A9A9A9] mr-2'>{aiPoints}</div>
            <div className='AI text-5xl text-[#757575] font-bold mr-2'>AI</div>
          </div>
          <div className='mid h-full w-1 bg-white'></div>
          <div className='right text-left'>
            <div className='score font-bold text-9xl text-[#A9A9A9] ml-2'>{realPoints}</div>
            <div className='actual text-5xl text-[#757575] font-bold ml-2'>REAL</div>
          </div>
          </div>
        </div>
      </div>
      <div className='flex xl:flex-row z-10 flex-col xl:fixed w-full xl:bottom-20 xl:gap-10 gap-20 absolute'>
        <div className='flex flex-col items-center'>
          {/* <div className='logo1'>
            logo1
          </div> */}
          <div className='team1 w-[70%]'>
            <img src='./stadium.png' className='bsolute'/>
            {/* <PlayerFormation players={playerData} /> */}
          </div>
          
        </div>
        <div className='flex flex-col items-center'>
          {/* <div className='logo2'>
            logo2
          </div> */}
          <div className='team1 w-[70%]'>
            <img src='./stadium.png' className='bsolute'/>
            {/* <PlayerFormation players={playerData} /> */}
          </div>
        </div>
      </div>
      <div className='flex xl:flex-row z-10 flex-col xl:fixed w-full xl:bottom-20 xl:gap-10 gap-20 absolute'>
        <div className='flex flex-col items-center'>
          {/* <div className='logo1'>
            logo1
          </div> */}
          <div className='team1 w-[70%]'>
            {/* <img src='./stadium.png' className='bsolute'/> */}
            <PlayerFormation players={playerDataTeam1} />
          </div>
          
        </div>
        <div className='flex flex-col items-center'>
          {/* <div className='logo2'>
            logo2
          </div> */}
          <div className='team1 w-[70%]'>
            {/* <img src='./stadium.png' className='bsolute'/> */}
            <PlayerFormation players={playerDataTeam2} />
          </div>
        </div>
      </div>
      <div className='text-center text-3xl text-[#757575] font-bold'>
          MEAN ABSOLUTE ERROR : {mae}
        </div>
    </div>
  )
}

export default Comparison