import React, { useEffect, useState } from "react";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";
import ethereum from "/svg/Eth (1).svg";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { formatNumber } from "@/Data/formikUtils";

const ShowAssets = ({ onAssetClick, setLoading, setPriceValue }) => {
  const user = secureLocalStorage.getItem("user");
  const [isLoading, setIsLoading] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const [assets, setassets] = useState([
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
  ]);
  useEffect(() => {
    axios
      .get("/api/wallet/balance", config)
      .then((res) => {
        const data = res.data.data;
        setassets((prev) =>
          prev.map((asset) =>
            asset.name === "Matic"
              ? {
                  ...asset,
                  value: data.polygonWalletBalance,
                  dollarAmount: data.dollarMaticBalance,
                }
              : {
                  ...asset,
                  value: data.bitcoinWalletBalance,
                  dollarAmount: data.dollarBitcoinBalance,
                }
          )
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="absolute top-[83px] min-h-[150px] z-50 bg-white w-full shadow-md rounded-lg  overflow-hidden transition-all duration-300">
      {isLoading ? (
        <div className="flex items-center justify-between w-full">
          {" "}
          <ScaleLoader
            color="#2F4EED"
            height={25}
            className="mx-auto"
            type="submit"
          />
        </div>
      ) : (
        assets.map((asset, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] ${
              index === 0 ? "rounded-t-lg" : ""
            } ${index === assets.length - 1 ? "rounded-b-lg" : ""}`}
            onClick={() => {
              onAssetClick(asset.name);
              setPriceValue({
                name: asset.name,
                value: asset.value,
                dollarAmount: asset.dollarAmount
              })
              
            }}
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
             
              <div className="s">
                {" "}
                <h1 className="text-[#151515] text-lg font-bold">
                  ${formatNumber(asset.dollarAmount)}
                </h1>
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase">
                  {formatNumber(asset.value,4)} {asset.name}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowAssets;
