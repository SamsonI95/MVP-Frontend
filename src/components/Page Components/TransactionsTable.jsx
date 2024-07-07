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
import { saveAs } from "file-saver";
import Papa from "papaparse";
import { formatNumber } from "@/Data/formikUtils";

const TransactionsTable = ({ transactions }) => {
  const [showModal, setShowModal] = useState(false);

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const user = secureLocalStorage.getItem("user");
  const [loading, setLoading] = useState(true);

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

  const [bitcoinTransaction, setBitcoinTransaction] = useState(
    sortedTransactions.filter((transaction) => transaction.asset === "BTC")
  );

  const [polygonTransactions, setPolygonTransactions] = useState(
    sortedTransactions.filter((transaction) => transaction.asset === "Polygon")
  );

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
  const headers = [
    { label: "S/N", key: "SN" },
    { label: "Transaction ID", key: "transactionId" },
    { label: "Transaction hash", key: "transactionhash" },
    { label: "Amount", key: "amount" },
    { label: "Asset", key: "asset" },
    { label: "Date", key: "date" },
  ];

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '') // Remove comma between date and year
    return formattedDate;
  };
  

  const csvDataAll = transactions.map((transaction) => ({
    sn: transactions.indexOf(transaction) + 1,
    transactionId: transaction.transactionId,
    transactionhash: transaction.hash,
    amountInUSD: transaction.amountInUSD,
    assetAmount:transaction.amount,
    asset: transaction.asset,
    date: formatDateTime(transaction.timestamp),
    type: transaction.type,
    status:transaction.status,
    senderWalletAddress: transaction.senderWalletAddress,
    recieverWalletAddress: transaction.receiverWalletAddress,
  }));

  const csvDataPolygon = polygonTransactions.map((transaction) => ({
    sn: transactions.indexOf(transaction) + 1,
    transactionId: transaction.transactionId,
    transactionhash: transaction.hash,
    amountInUSD: transaction.amountInUSD,
    assetAmount:transaction.amount,
    asset: transaction.asset,
    date: formatDateTime(transaction.timestamp),
    type: transaction.type,
    status:transaction.status,
    senderWalletAddress: transaction.senderWalletAddress,
    recieverWalletAddress: transaction.receiverWalletAddress,
  }));

  const csvDataBitcoin = bitcoinTransaction.map((transaction) => ({
    sn: transactions.indexOf(transaction) + 1,
    transactionId: transaction.transactionId,
    transactionhash: transaction.hash,
    amountInUSD: transaction.amountInUSD,
    assetAmount:transaction.amount,
    asset: transaction.asset,
    date: formatDateTime(transaction.timestamp),
    type: transaction.type,
    status:transaction.status,
    senderWalletAddress: transaction.senderWalletAddress,
    recieverWalletAddress: transaction.receiverWalletAddress,
  }));

  const csvReport = {
    headers,
    data:
      tabs === "All"
        ? csvDataAll
        : tabs === "Polygon"
        ? csvDataPolygon
        : csvDataBitcoin,
  };
  const handleDownload = () => {
    if (tabs === "All") {
      const csv = Papa.unparse(csvReport, { header: true });
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      saveAs(blob, "transactions.csv");
    } else if (tabs === "Bitcoin") {
      const csvBitcoin = Papa.unparse(csvReport, { header: true });
      const blobBitcoin = new Blob([csvBitcoin], {
        type: "text/csv;charset=utf-8",
      });
      saveAs(blobBitcoin, "Bitcointransactions.csv");
    } else {
      const csvPolygon = Papa.unparse(csvReport, { header: true });
      const blob = new Blob([csvPolygon], { type: "text/csv;charset=utf-8" });
      saveAs(blob, "Polygontransactions.csv");
    }
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
        <div
          onClick={handleDownload}
          className="bg-[#E9E9E9] w-10 h-10 rounded-full px-[10px] md:px-[8px] flex justify-center items-center cursor-pointer"
        >
          <BsDownload className="text-[1rem] text-[#1F2937] font-black" />
        </div>
      </div>
      <>
        {transactions.length == 0 ? (
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
                transactions={bitcoinTransaction}
                openModal={openModal}
                truncateWalletAddress={truncateWalletAddress}
              />
            )}
            {tabs == "Matic" && (
              <MaticTransaction
                sortedTransactions={sortedTransactions}
                transactions={polygonTransactions}
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
