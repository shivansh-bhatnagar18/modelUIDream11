import React from 'react';

interface PlayerProps {
  imageSrc: string;
  number: number;
  name: string;
}

const PlayerComponent = ({ imageSrc, number, name }: PlayerProps) => {
  return (
    <div className="w-[20%] self-center flex flex-col">
      {/* <div className='w-full z-10'> */}
        <img src={imageSrc} alt={name} className="" />
        <div className="flex flex-row z-100">
          <p className="text-lg text-white flex-grow leading-3 ">{name}</p>
          <p className="text-2xl font-bold text-white">{number}</p>
        </div>
      {/* </div> */}     
    </div>
  );
};

export default PlayerComponent;