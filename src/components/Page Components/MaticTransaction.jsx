import React, { useEffect, useMemo, useState } from "react";
import matic from "/svg/matic.svg";
import bitcoin from "/svg/Bitcoin Badge.svg";

import { RxArrowTopRight, RxArrowBottomLeft } from "react-icons/rx";
import { formatNumber } from "@/Data/formikUtils";

const MaticTransaction = ({
  sortedTransactions,
  openModal,
  truncateWalletAddress,
}) => {
  const polygonTransactions = sortedTransactions.filter(
    (transaction) => transaction.asset === "Polygon"
  );
  return (
    <div>
      <div className="whitespace-nowrap overflow-auto w-full">
        {polygonTransactions.map((transaction, index) => (
          <div key={index}>
            {index === 0 ||
            sortedTransactions[index - 1].formattedDate !==
              transaction.formattedDate ? (
              <p className="w-full pl-[32px] pr-[10px] py-[16px] gap-[10px] text-[.875rem] text-[#9C9C9C] font-semibold leading-4">
                {transaction.formattedDate}
              </p>
            ) : null}
            <table className="w-full">
              <tbody className="w-full">
                <tr
                  onClick={() => openModal(transaction)}
                  className="cursor-pointer flex items-center self-stretch gap-[12px] w-full"
                >
                  <td className="flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] ">
                    <div className="relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]">
                      {transaction.type === "Outgoing" ? (
                        <RxArrowTopRight className="text-[1.25rem]" />
                      ) : (
                        <RxArrowBottomLeft className="text-[1.25rem]" />
                      )}
                      <img
                        className="absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain"
                        src={matic}
                        alt={transaction.asset}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-[1.125rem] font-bold text-[#151515] leading-7">
                        {transaction.type === "Outgoing" ? "Sent" : "Received"}
                      </h1>
                      <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-4">
                        {transaction.formattedTime}
                      </p>
                    </div>
                  </td>
                  <td className="flex flex-col justify-center px-[32px] md:px-[12px] py-[10px] w-full items-start self-stretch">
                    <h1 className="text-[1.125rem] font-bold text-[#151515] leading-7">
                      {transaction.type === "Outgoing" ? "To" : "From"}
                    </h1>
                    <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-4">
                      {truncateWalletAddress(
                        transaction.type === "Outgoing"
                          ? transaction.senderWalletAddress
                          : transaction.receiverWalletAddress
                      )}
                    </p>
                  </td>
                  <td className="flex flex-col justify-center px-[32px] md:px-[12px] py-[10px] w-full items-start self-stretch">
                    <h1
                      className={`text-[1.125rem] font-bold leading-7 ${
                        transaction.type === "Outgoing"
                          ? "text-[#ED2F2F]"
                          : "text-[#23AE5E] "
                      }`}
                    >
                      {transaction.type === "Outgoing"
                        ? `-$${formatNumber(transaction.amountInUSD) || 0.5}`
                        : `+$${formatNumber(transaction.amountInUSD) || 0.5}`}
                    </h1>
                    <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-4">
                      {transaction.amount}{" "}
                      {transaction.asset === "BTC"
                        ? transaction.asset
                        : "Matic"}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaticTransaction;
