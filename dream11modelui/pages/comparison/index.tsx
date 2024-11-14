'use client'
import React from 'react'
import SearchDropdown from '@/app/components/searchDropdown'
import PlayerComponent from '@/app/components/playerAvatar'


function page2() {
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
    <div className='flex justify-between'>
      <div className='left flex flex-col'>
        <div className='logo1'>
          logo1
        </div>
        <div className='team1 bg-sadium bg-contain bg-no-repeat '>
          <img src='./stadium.png'/>
        </div>
      </div>
      
      <div className=' center flex flex-col flex-wrap'>
        <div className="mt-10 pb-10 font-bold font-barlo text-5xl text-center">
          DREAM11
        </div>
        <div className='w-full flex justify-center'>
          <SearchDropdown label="1" periodData={periodData} />
        </div>
        <div className='data flex flex-col flex-wrap justify-center font-barlo p-10'>
          <div className='title block text-center text-2xl text-[#757575] font-bold'>FANTASY SCORE</div>
          <div className='flex flex-wrap justify-center'>
          <div className='left text-right'>
            <div className='score font-bold text-7xl text-[#A9A9A9] mr-5'>96</div>
            <div className='AI text-2xl text-[#757575] font-bold mr-5'>AI</div>
          </div>
          <div className='mid h-full w-1 bg-white'></div>
          <div className='right text-left'>
            <div className='score font-bold text-7xl text-[#A9A9A9] ml-5'>94</div>
            <div className='actual text-2xl text-[#757575] font-bold ml-5'>REAL</div>
          </div>
          </div>
        </div>
      </div>

      <div className='left flex flex-col'>
        <div className='logo2'>
          logo2
        </div>
        <div className='team1 bg-sadium bg-contain bg-no-repeat '>
          <img src='./stadium.png' />
        </div>
        {/* <PlayerComponent imageSrc='https://cdn.sportmonks.com/images/cricket/players/2/2.png' number={1} name='abs'/> */}
      </div>
    </div>
  )
}

export default page2