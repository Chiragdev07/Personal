import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Stockdata from "../Stockdata";

const Controller = () => {
  const [isOpen, setIsopen] = useState(false);

  const [selectedValue,setSelectedValue]=useState([]);

  const toggleOpen = () => {
    setIsopen((prev) => !prev);
  };


  const HandleSelect = (value) =>{
       setSelectedValue((prev)=> [...prev,value]);
       console.log(value);
       
  }

  console.log(selectedValue)


 
  const handleSubmit = () => {
    localStorage.setItem("myArray", JSON.stringify(selectedValue));
    window.location.reload();
  };

  return (
    <>
      <div className="absolute z-0 right-[10%] top-[3%]">
        <span onClick={toggleOpen} className="cursor-pointer">
          <i>
            <IoSettingsOutline
              size={40}
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </i>
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-[2.8%] left-[10%] bg-white border border-gray-300 rounded-md mt-1 shadow-md z-10 w-[80%] h-[50vh] overflow-y-auto ">
          {/* <div className="flex"> 
          {stockData.map((value, index) => (
           
            <div className="w-[20%] m-5 relative" key={index}>
              <div
                onClick={() => toggleSelect(index)}
                className="border rounded-md bg-white shadow-md p-3 cursor-pointer flex justify-between items-center"
              >
                <span>{` Option For Box :- ${index}`}</span> 
                <span
                  className={`transform transition-transform ${openSelectbox === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </div>

              {openSelectbox === index && (
                <div className="border-[2px]">
                  {stockData.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >

                      <span onClick={(e)=>console.log(e.target)}>
                      {option.property}
                      </span>
                      
            
                    </div>
                  ))}
                </div>
              )}
            </div>
           
          ))}
          </div> */}
          <div className=" flex gap-2 ">
          {
            Stockdata.map((value,index)=>(
                <select
                key={index}
                className="border border-gray-300 rounded-md p-2 mb-4 mx-auto mt-4 w-[10%]"
                onChange={ (e)=> HandleSelect(e.target.value)}
              >
                <option value="" >
                   Value for Box
                </option>

                {Stockdata.map((option, idx) => (
                  <option key={idx} value={option.property}>
                    {option.property} {/* Display the property name */}
                  </option>
                ))}
              </select>
            ))
        }
          </div>

          <div className="mt-[20%] flex justify-evenly ">
            <button
              className=" ml-[10%]  py-2 px-5 text-2xl bg-green-300 rounded-lg"
              onClick={handleSubmit}
            >
              {" "}
              Save{" "}
            </button>
            <button className=" mr-[10%]  py-2 px-5 text-2xl bg-red-400 rounded-lg" onClick={()=>setIsopen(false)}>
              Cancle
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Controller;
