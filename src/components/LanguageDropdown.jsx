import React, { useState } from 'react';

const languages = [
    { code: 'en', label: 'EN', flag: '/assets/flags/us-flag.png' },
    { code: 'uk', label: 'UK', flag: '/assets/flags/uk-flag.png' },
    { code: 'pk', label: 'PK', flag: '/assets/flags/pk-flag.jpg' },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // console.log("===Selected language:", language);
  };

  return (
    <div className="relative">
      <div 
        onClick={toggleDropdown} 
        className="flex items-center space-x-2 rounded-lg px-2 py-1 cursor-pointer"
      >
        <img src={selectedLanguage.flag} alt={`${selectedLanguage.label} Flag`} className="w-[30px] h-[20px] rounded" />
        <span className="text-primaryText text-sm">{selectedLanguage.label}</span>
        <svg className="w-4 h-4 text-primaryText" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {languages?.map((language) => (
            <div 
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer"
            >
              <img src={language.flag} alt={`${language.label} Flag`} className="w-5 shadow h-4 mr-2 rounded" />
              <span className="text-primaryText text-sm">{language.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
