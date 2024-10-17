import React, { useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { IoMoonOutline } from 'react-icons/io5';

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
    // console.log("=====Dark mode:", !isDarkMode); 
  };

  return (
    <div className="flex items-center space-x-6">

      <label className="relative inline-flex justify-between items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
        
        <div 
          style={{ boxShadow: 'inset 2px 2px 2px rgba(59, 75, 102, 0.17)' }} 
          className={`w-[68px] h-[36px] rounded-full transition-colors bg-white duration-200`}>
             <IoMoonOutline 
            className={`absolute left-[52px]  top-[10px] transform -translate-x-1/2 size-[14.65px] transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#3B4B66]'}`} 
            size={16.67}
          />
          
          <CiLight 
            className={`absolute left-[16px] top-[10px] transform -translate-x-1/2 transition-colors duration-200 ${isDarkMode ? 'text-[#3B4B66]' : 'text-white'}`} 
            size={16.67}
          />
          </div>
        
        
        <span 
          className={`absolute size-[28px] rounded-xl transition-transform duration-200 ${isDarkMode ? 'translate-x-[35px]' : 'translate-x-[2.5px]'} flex items-center justify-center bg-primary`}>
          {isDarkMode ? (
            <IoMoonOutline className="text-white size-[16.67px]" />
          ) : (
            <CiLight className="text-white size-[16.67px]" />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggler;
