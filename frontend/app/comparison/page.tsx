'use client'
import React from 'react'
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
    <div className="flex flex-col justify-between bg-[#000426] min-h-screen">
      <div className="flex flex-col items-center z-10">
        <div className="mt-10 pb-10 font-bold text-4xl sm:text-6xl lg:text-8xl text-center text-white">
          DREAM11
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-auto flex justify-center bg-[#D9D9D9] rounded-l p-2 z-10">
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
        <div className="data flex flex-col flex-wrap justify-center p-10">
          <div className="title block text-center text-3xl sm:text-4xl lg:text-4xl text-[#757575] font-bold">
            FANTASY SCORE
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="left text-right flex flex-col items-end m-2">
              <div className="score font-bold text-6xl sm:text-7xl lg:text-6xl text-[#A9A9A9]">
                {aiPoints}
              </div>
              <div className="AI text-3xl md:text-4xl lg:text-5xl text-[#757575] font-bold">
                AI
              </div>
            </div>
            <div className='mid h-20 md:h-24 w-1 bg-white'></div>
            <div className="right text-left flex flex-col items-start m-2">
              <div className="score font-bold text-6xl md:text-7xl lg:text-6xl text-[#A9A9A9]">
                {realPoints}
              </div>
              <div className="actual text-3xl md:text-4xl lg:text-5xl text-[#757575] font-bold">
                REAL
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row z-0 items-center lg:fixed w-full lg:bottom-20 gap-48 py-4 px-4">
        <div className="flex flex-col items-center">
          <div className="team1 w-full md:w-[70%] relative">
            {mae ? (<img src='./stadium.png' className='-z-10 absolute h-full'/>): (null)}
            <PlayerFormation players={playerDataTeam1} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="team2 w-full md:w-[70%] relative">
            {mae ? (<img src='./stadium.png' className='-z-10 absolute h-full'/>): (null)}
            <PlayerFormation players={playerDataTeam2} />
          </div>
        </div>
      </div>
      <div className="text-center text-xl md:text-2xl lg:text-3xl text-[#757575] font-bold ">
        MEAN ABSOLUTE ERROR: {mae}
      </div>
      <div className="flex justify-center my-4">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = csvFilePath;
            link.download = 'data.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Data CSV
        </button>
      </div>
    </div>
  )
}

export default Comparison