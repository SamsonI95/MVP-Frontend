import React from 'react';
import bitcoin from '/svg/Bitcoin Badge.svg';
import polygon from '/svg/Coinnomad logo.svg';
import ethereum from '/svg/Eth (1).svg';

const ShowAssets = ({ onAssetClick }) => {
  const assets = [
    { name: 'Matic', value: '$200.00', icon: polygon },
    { name: 'BTC', value: '$200.00', icon: bitcoin },
    { name: 'ETH', value: '$200.00', icon: ethereum }
  ];

  return (
    <div className='absolute top-[83px] bg-white w-full shadow-md rounded-lg h-[204px] overflow-hidden transition-all duration-300'>
      {assets.map((asset, index) => (
        <div
          key={index}
          className={`flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] ${index === 0 ? 'rounded-t-lg' : ''} ${index === assets.length - 1 ? 'rounded-b-lg' : ''}`}
          onClick={() => onAssetClick(asset)}
        >
          <div className='flex items-center gap-3'>
            <img className='h-8 w-8' src={asset.icon} alt={asset.name} />
            <div>
              <h1 className='text-[#151515] text-lg font-bold uppercase'>{asset.name}</h1>
              <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>{asset.name}</p>
            </div>
          </div>
          <div>
            <h1 className='text-[#151515] text-lg font-bold'>{asset.value}</h1>
            <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>{asset.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAssets;
