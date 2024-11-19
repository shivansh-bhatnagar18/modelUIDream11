'use client'
import React from 'react'
import SearchDropdown from '@/components/searchDropdown'
import PlayerComponent from '@/components/playerAvatar'
import { Button } from '@mui/material'
import PlayerFormation from '@/components/playerFormation'

const playerData = [
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/20/148.png', number: 148, name: 'Jason Roy' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/21/149.png', number: 149, name: 'Mark Stoneman' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/22/150.png', number: 150, name: 'Chris Woakes' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/23/151.png', number: 151, name: 'Jonny Bairstow' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/24/152.png', number: 152, name: 'Sam Billings' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/25/153.png', number: 153, name: 'Sir Alastair Cook' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/26/154.png', number: 154, name: 'Alex Hales' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/27/155.png', number: 155, name: 'Jack Leach' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/28/156.png', number: 156, name: 'Craig Overton' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/29/157.png', number: 157, name: 'Adil Rashid' },
  { imageSrc: 'https://cdn.sportmonks.com/images/cricket/players/30/158.png', number: 158, name: 'Ben Stokes' }
]

function Comparison() {
    const periodData = [
      {label : "01/01/24 - 02/01/24"},
      {label : "02/01/24 - 03/01/24"},
      {label : "03/01/24 - 04/01/24"},
      {label : "04/01/24 - 05/01/24"},
      {label : "05/01/24 - 06/01/24"},
      {label : "06/01/24 - 07/01/24"},
      {label : "07/01/24 - 08/01/24"},
      {label : "08/01/24 - 09/01/24"},
      {label : "09/01/24 - 10/01/24"},
    ]
  return (
    <div className='flex justify-between bg-[#000426] h-full xl:h-screen flex-col'>   
      <div className='flex flex-col flex-wrap lg:z-50 z-10 items-center'>
        <div className="mt-10 pb-10 font-bold text-8xl text-center">
          DREAM11
        </div>
        <div className='flex flex-row justify-center'>
        <div className='w-min flex justify-center bg-[#D9D9D9] rounded-l'>
          <SearchDropdown label="Select Match" periodData={periodData} />
        </div>
        </div>
        <div className='data flex flex-col flex-wrap justify-center p-10'>
          <div className='title block text-center text-5xl text-[#757575] font-bold'>FANTASY SCORE</div>
          <div className='flex flex-wrap justify-center'>
          <div className='left text-right'>
            <div className='score font-bold text-9xl text-[#A9A9A9] mr-2'>96</div>
            <div className='AI text-5xl text-[#757575] font-bold mr-2'>AI</div>
          </div>
          <div className='mid h-full w-1 bg-white'></div>
          <div className='right text-left'>
            <div className='score font-bold text-9xl text-[#A9A9A9] ml-2'>94</div>
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
            <PlayerFormation players={playerData} />
          </div>
          
        </div>
        <div className='flex flex-col items-center'>
          {/* <div className='logo2'>
            logo2
          </div> */}
          <div className='team1 w-[70%]'>
            {/* <img src='./stadium.png' className='bsolute'/> */}
            <PlayerFormation players={playerData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison