import React, { useState } from 'react';
import { IOption, TCountryOption, TRegion } from '../../../../types/inedx';

const Cascader:React.FC<> = () => {
  // const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  // const [currentOptions, setCurrentOptions] = useState<IOption>(options.countries);

  // const handleOptionSelect = (option:TRegion) => {
  //   if(selectedOptions){
  //     setSelectedOptions([...selectedOptions, option]);
  //     setCurrentOptions(option.);
  //   }
  // };

  // const handleGoBack = () => {
  //   setSelectedOptions(selectedOptions.slice(0, -1));
  //   setCurrentOptions(selectedOptions[selectedOptions.length - 1]?.children || options);
  // };

  const [options,setOption] = useState <IOption | null>(null);


  return (
    <div>
      {/* {selectedOptions.length > 0 && (
        <button onClick={handleGoBack}>Go Back</button>
      )} */}

      <ul>
        {options?.countries.map((option) => (
          <li key={option.nameCountry} >
            {option.nameCountry}
          </li>
        ))}
      </ul>

      <div>
        Selected Options:
        {selectedOptions.map((option) => (
          <span key={option.value}> {option.label} > </span>
        ))}
      </div>
    </div>
  );
};

export default Cascader;