import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center h-[80px] px-20 py-4 bg-bgNav shadow-md">

     <div className="flex gap-5">
     <div className="flex items-center space-x-2">
        <span className="text-[44px] font-extrabold text-primary">DSF</span>
        <span className="text-primaryText text-[10px] font-medium">Defining<br />Successful<br />Future</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="/dashboard" className="text-primaryText hover:text-black font-medium text-[14px]">Dashboard</a>
        <div className="h-5 border-l border-[#3B4B6699] mx-2"></div>
        <a href="/invest" className="text-primaryText hover:text-black font-medium text-[14px]">Invest</a>
        <a href="/loan" className="text-primaryText hover:text-black font-medium text-[14px]">Loan</a>
        <a href="/dao" className="text-primaryText hover:text-black font-medium text-[14px]">DAO</a>
       
      </div>
     </div>
     

      <div className="flex items-center space-x-8 ml-4">
        <div className="flex space-x-6">
        <a href="/promode" className="text-primaryText hover:text-black font-medium text-[14px]">Pro mode</a>
  
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div  
            style={{ boxShadow: 'inset 2px 2px 2px rgba(59, 75, 102, 0.17)' }} 
            className="w-[38px] h-6 bg-white rounded-full peer peer-checked:bg-white transition-colors duration-200"></div>
          <span 
            className="absolute left-[2.5px] top-[2.5px] w-[19px] h-[19px] bg-primary rounded-full transition-transform duration-200 peer-checked:translate-x-[15px]"></span>
        </label>
        </div>

        <LanguageDropdown/>
       <ThemeToggler/>
        
 
        <button className="w-[200px] h-[56px] text-[14px] font-semibold border border-primary text-primary rounded-[20px] hover:bg-blue-600 hover:text-white transition">
          Connect wallet
        </button>
      </div>
    </nav>
  </>
  
   
  );
};

export default Navbar;
