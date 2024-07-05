import React from "react";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";
import ethereum from "/svg/Eth (1).svg";
import secureLocalStorage from "react-secure-storage";

const ShowAssets = ({ onAssetClick, setLoading }) => {
  const user = secureLocalStorage.getItem("user");

  const assets = [
    {
      name: "Matic",
      value: user.polygonWalletBalance.balance,
      icon: polygon,
      dollarAmount: user.dollarAmountMatic ?? "0.00",
    },
    {
      name: "BTC",
      value: user.bitcoinTotalBalance,
      icon: bitcoin,
      dollarAmount: user.dollarAmountBitcoin ?? "0.00",
    },
  ];

  return (
    <div className="absolute top-[83px] z-50 bg-white w-full shadow-md rounded-lg  overflow-hidden transition-all duration-300">
      {assets.map((asset, index) => (
        <div
          key={index}
          className={`flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] ${
            index === 0 ? "rounded-t-lg" : ""
          } ${index === assets.length - 1 ? "rounded-b-lg" : ""}`}
          onClick={() => {
            onAssetClick(asset.name)}}
        >
          <div className="flex items-center gap-3">
            <img className="h-8 w-8" src={asset.icon} alt={asset.name} />
            <div>
              <h1 className="text-[#151515] text-lg font-bold uppercase">
                {asset.name}
              </h1>
              <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold">
                {asset.name}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[#151515] text-lg font-bold">
              ${asset.dollarAmount}
            </h1>
            <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase">
              {asset.value} {asset.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAssets;
