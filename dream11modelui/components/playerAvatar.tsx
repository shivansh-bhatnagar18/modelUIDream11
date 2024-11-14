import React from 'react';

interface PlayerProps {
  imageSrc: string;
  number: number;
  name: string;
}

const PlayerComponent = ({ imageSrc, number, name }: PlayerProps) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <div className="text-center mt-4">
        <p className="text-2xl font-bold text-white">{number}</p>
        <p className="text-lg text-gray-400">{name}</p>
      </div>
    </div>
  );
};

export default PlayerComponent;