import {  useState } from "react"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DataGrids from "./dataGrid";





const Mainitem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [searchField, setSearchField] = useState(' Field of Interest')
    const [searchField2, setSearchField2] = useState('Tech Stack')
    const [seachitem , SetSeachitem] = useState('')
    const [value, onChange] = useState(new Date());
    console.log(seachitem)
    
    const toggleDropdown =  () => {
        setIsOpen(!isOpen);
      };
      const toggleDropdowntwo =  () => {
        setIsOpen2(!isOpen2);
      };  
     
  return (
    <section>
        <div className="ml-[10%]">Sort by</div>
        
         <div className=" ml-[10%] mt-[20px] w-full h-[20px] flex relative">
       
        <div className="  relative inline-block  text-center">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        id="options-menu"
        onClick={toggleDropdown}
      >
        {searchField}
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v10a1 1 0 01-1.555.832L5.474 12.11a1 1 0 011.053-1.664L10 13.268l3.473-2.822a1 1 0 011.053 1.664l-4.97 4.022A1 1 0 0110 14V4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="  origin-top-right absolute ml-[20%] right-[-40px] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 ml-[35%]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              href="#"
              className="block    justify-center py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={()=> setSearchField('option 1')}
              >Option 1</button>
              

            
              <button
              href="#"
              className="block    py-3 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={()=> setSearchField('option 2')}
              >Option 2</button>
              
              <button
              href="#"
              className="block   justify-center py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={()=> setSearchField('option 3')}
              >Option 3</button>
              
          </div>
        </div>
      )}
      </div>
      <div className="ml-[10%]  relative inline-block">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        id="options-menu"
        onClick={toggleDropdowntwo}
      >{searchField2}
      <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v10a1 1 0 01-1.555.832L5.474 12.11a1 1 0 011.053-1.664L10 13.268l3.473-2.822a1 1 0 011.053 1.664l-4.97 4.022A1 1 0 0110 14V4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen2 && (
        <div className="  origin-top-right absolute ml-[20%] right-[-40px] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 ml-[35%]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              href="#"
              className="block    justify-center py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={()=> setSearchField2('option 1')}
              >Option 1</button>
              

            
              <button
              href="#"
              className="block    py-3 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={()=> setSearchField2('option 2')}
              >Option 2</button>
              
              <button
              href="#"
              className="block   justify-center py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={()=> setSearchField2('option 3')}
              >Option 3</button>
              
          </div>
        </div>
      )}
        
      </div>
      <div>
        <a href="#" className=" text-blue-500 ml-[30px]">Sort by Cohort</a>
      </div>
      <div className="ml-[20px]">
      <DatePicker onChange={onChange} value={value} />

      </div>
      <div className="ml-4 m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600">
      <form className="flex items-center">   
      <input type="text" onChange={(e)=> SetSeachitem(e.target.value)} placeholder="Search..."/>

    
      </form>

      </div>
      

    
    </div>
    <DataGrids seachitem={seachitem}/>
        

    </section>
   
  )
}

export default Mainitem
