import React from "react";

const Card = ({ assetName, profitability, soon , icon}) => {
  return (
    <div className="h-[60px] bg-secondary rounded-2xl p-6 text-center flex justify-between items-center">
     <div className="flex gap-2">
     <img src={icon} alt={icon} className="rounded-full size-6"/>
     <h3 className="text-gray-600">{assetName}:</h3>
     </div>
      {soon ? (
        <span className="bg-secondary px-4 py-2 text-primary rounded-full text-[12px] flex justify-center items-center ">Soon</span>
      ) : (
        <span className="text-primaryText text-base font-semibold">{profitability}%</span>
      )}
    </div>
  );
};

export default Card;
