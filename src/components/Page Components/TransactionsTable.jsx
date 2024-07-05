import React, { useEffect, useMemo, useState } from "react";
import { format, isToday, isYesterday } from "date-fns";
import bitcoin from "/svg/Bitcoin Badge.svg";
import matic from "/svg/matic.svg";
import ethereum from "/svg/Eth (1).svg";
import { BsDownload } from "react-icons/bs";
import { RxArrowTopRight, RxArrowBottomLeft } from "react-icons/rx";
import { IoSwapVerticalOutline } from "react-icons/io5";
import TransactionDetails from "./Modals/TransactionDetails";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";
import AllTransaction from "./AllTransaction";
import MaticTransaction from "./MaticTransaction";
import BitcoinTransaction from "./BitcoinTransaction";

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
  const [tabs, setTabs] = useState("All");
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
          <button
            onClick={() => {
              setTabs("All");
            }}
            className={`py-[4px] px-[16px] gap-[8px] flex justify-center items-center ${
              tabs == "All" ? " bg-[#2F4EED] text-white" : " text-[#9C9C9C]"
            } rounded-[50px] text-[1rem] font-semibold leading-6`}
          >
            All
          </button>
          <button
            onClick={() => {
              setTabs("Bitcoin");
            }}
            className={`py-[4px] px-[16px] gap-[8px] flex justify-center items-center ${
              tabs == "Bitcoin" ? " bg-[#2F4EED] text-white" : " text-[#9C9C9C]"
            } text-[1rem] rounded-[50px] font-semibold leading-6`}
          >
            Bitcoin
          </button>
          <button
            onClick={() => {
              setTabs("Matic");
            }}
            className={`py-[4px] px-[16px] gap-[8px] flex justify-center items-center ${
              tabs == "Matic" ? " bg-[#2F4EED] text-white" : " text-[#9C9C9C]"
            } text-[1rem] rounded-[50px] font-semibold leading-6`}
          >
            Matic
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
        ) : transactions.length == 0 ? (
          <div className="flex flex-col justify-start items-center px-[10px] py-[80px] md:h-[612px] w-full gap-[10px]">
            <div className=" rounded-full p-[10px] bg-[#F7F7F7] gap-[10px] flex justify-center items-center">
              <IoSwapVerticalOutline className="text-[1.25rem] rotate-[45deg]" />
            </div>
            <p className="text-[#000000] text-[1.125rem] font-semibold leading-7">
              No Activity
            </p>
          </div>
        ) : (
          <div>
            {tabs == "All" && (
              <AllTransaction
                sortedTransactions={sortedTransactions}
                transactions={transactions}
                openModal={openModal}
                truncateWalletAddress={truncateWalletAddress}
              />
            )}
            {tabs == "Bitcoin" && (
              <BitcoinTransaction
                sortedTransactions={sortedTransactions}
                transactions={transactions}
                openModal={openModal}
                truncateWalletAddress={truncateWalletAddress}
              />
            )}
            {tabs == "Matic" && (
              <MaticTransaction
                sortedTransactions={sortedTransactions}
                transactions={transactions}
                openModal={openModal}
                truncateWalletAddress={truncateWalletAddress}
              />
            )}
          </div>
        )}
      </>
    </section>
  );
};

export default TransactionsTable;
