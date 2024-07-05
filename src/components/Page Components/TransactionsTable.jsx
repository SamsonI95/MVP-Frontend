import React, { useEffect, useMemo, useState } from "react";
import { format, isToday, isYesterday } from "date-fns";
import bitcoin from "/svg/Bitcoin Badge.svg";
import ethereum from "/svg/Eth (1).svg";
import { BsDownload } from "react-icons/bs";
import { RxArrowTopRight, RxArrowBottomLeft } from "react-icons/rx";
import { IoSwapVerticalOutline } from "react-icons/io5";
import TransactionDetails from "./Modals/TransactionDetails";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";

const TransactionsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const user = secureLocalStorage.getItem("user");
  const [loading, setLoading] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const res = await axios.get("/api/wallet/transactions", config);
        console.log(res.data.data);
        setTransactions(res.data.data);
      } catch (err) {
        console.error(err);
        toast.error(err.response.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    getAllTransactions();
  }, []);

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isToday(parsedDate)) {
      return "Today";
    } else if (isYesterday(parsedDate)) {
      return "Yesterday";
    } else {
      return format(parsedDate, "MMMM d, yyyy");
    }
  };
  const sortedTransactions = useMemo(() => {
    return transactions
      .map((transaction) => ({
        ...transaction,
        formattedDate: formatDate(transaction.timestamp),
        formattedTime: format(new Date(transaction.timestamp), "hh:mm a"),
      }))
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [transactions]);

  const truncateWalletAddress = (address) => {
    // Check if the address is valid and of the correct format

    // Truncate the address to the desired format
    const truncatedAddress = `${address.slice(0, 6)}...${address.slice(-6)}`;

    return truncatedAddress;
  };

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };
  return (
    <section className="w-full gap-[10px]">
      {showModal && (
        <TransactionDetails
          setShowModal={setShowModal}
          transaction={selectedTransaction}
        />
      )}
      <div className="px-[16px] py-[4px] md:py-[16px] md:pr-[32px] flex justify-between items-center gap-3 md:gap-6 whitespace-nowrap overflow-auto w-full scroll">
        <div className="flex justify-center md:justify-between md:px-[32px] gap-2 items-center">
          <button className="py-[4px] px-[16px] gap-[8px] flex justify-center items-center bg-[#2F4EED] text-white rounded-[50px] text-[1rem] font-semibold leading-6">
            All
          </button>
          <button className="py-[4px] px-[16px] gap-[8px] flex justify-center items-center text-[#9C9C9C] text-[1rem] rounded-[50px] font-semibold leading-6">
            Bitcoin
          </button>
          <button className="py-[4px] px-[16px] gap-[8px] flex justify-center items-center text-[#9C9C9C] text-[1rem] rounded-[50px] font-semibold leading-6">
            Polygon
          </button>
        </div>
        <div className="bg-[#E9E9E9] w-10 h-10 rounded-full px-[10px] md:px-[8px] flex justify-center items-center cursor-pointer">
          <BsDownload className="text-[1rem] text-[#1F2937] font-black" />
        </div>
      </div>
      <>
        {loading ? (
          <div className=" w-full flex justify-center items-center pt-10">
            {" "}
            <ScaleLoader
              color="#2F4EED"
              height={15}
              className=" mx-auto"
              type="submit"
            />
          </div>
        ) : transactions.length === 0 ? (
          <div className="flex flex-col justify-start items-center px-[10px] py-[80px] md:h-[612px] w-full gap-[10px]">
            <div className=" rounded-full p-[10px] bg-[#F7F7F7] gap-[10px] flex justify-center items-center">
              <IoSwapVerticalOutline className="text-[1.25rem] rotate-[45deg]" />
            </div>
            <p className="text-[#000000] text-[1.125rem] font-semibold leading-7">
              No Activity
            </p>
          </div>
        ) : (
          <div className="whitespace-nowrap overflow-auto w-full">
            {sortedTransactions.map((transaction, index) => (
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
                      className="cursor-pointer hover:bg-[#F7F7F7] duration-200 flex items-center self-stretch gap-[12px] w-full"
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
                            src={
                              transaction.asset === "BTC" ? bitcoin : ethereum
                            }
                            alt={transaction.asset}
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <h1 className="text-[1.125rem] font-bold text-[#151515] leading-7">
                            {transaction.type === "Outgoing"
                              ? "Sent"
                              : "Received"}
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
                            ? `-$${transaction.amountInDollars || 0.5}`
                            : `+$${transaction.amountInDollars || 0.5}`}
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
        )}
      </>
    </section>
  );
};

export default TransactionsTable;
