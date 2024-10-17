import React from "react";
import Navbar from "./Navbar";
import StepProgress from "./StepProgress";
import Card from "./Card";
import { PiWallet } from "react-icons/pi";
import { BiCoinStack } from "react-icons/bi";

const Deposit = () => {
  return (
    <div>
      <Navbar />
      <StepProgress/>

      <div className="mb-2">
      <div className="pb-4 px-20 min-h-[204px] h-full">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between mb-5">
          <h2 className="text-2xl font-bold text-primaryText">Before you start</h2>
          <h2 className="text-base text-primary font-semibold hover:opacity-90 cursor-pointer">Having difficulties?</h2>
          </div>
          <ul className="list-none ml-6 text-gray-600 h-[112px] flex flex-col gap-3 ">
            <li className="flex gap-2 items-center">
              <div className="flex font-semibold items-center justify-center size-12 rounded-full bg-secondary">
              <PiWallet  className="zise-[18.44px] text-primary flex font-semibold items-center justify-center rounded-xl bg-secondary" />
              </div>
              <span className="text-sx font-semibold">1. Make sure to connect your wallet</span></li>
            <li className="flex space-x-2 items-center">
              <div className="flex font-semibold items-center justify-center size-12 rounded-full bg-secondary">
              <BiCoinStack className="zise-[18.44px] text-primary"/>
              </div>
             <span className="text-sx font-semibold">2. Check your wallet balance</span></li>
          </ul>

        <div className="bg-secondary px-6 py-4 rounded-3xl my-3">
       <div className="flex flex-col justify-between gap-2">
       <h3 className="text-[20px] font-semibold mt-6 text-primaryText">Place your assets and start earning!</h3>
       <p className="text-base text-[#3B4B66AD] mb-4">The current profitability of our strategy:</p>
       </div>
          
          <div className="grid grid-cols-3 gap-4">
            <Card assetName="USDT" profitability="8.34" icon="/assets/currency/USDT.png"/>
            <Card assetName="ETH" soon icon="/assets/currency/ETH.png"/>
            <Card assetName="WBTC" soon icon="/assets/currency/BTC.png"/>
          </div>
        </div>

          <button className=" w-[200px] h-[60px] text-base font-semibold border bg-primary border-white text-white rounded-[20px] hover:border-primary hover:bg-white hover:text-primary transition">Connect wallet</button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Deposit;
