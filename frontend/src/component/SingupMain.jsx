import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const SingupMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchField, setSearchField] = useState(' Security');
    const [value, onChange] = useState(new Date());
    const toggleDropdown =  () => {
        setIsOpen(!isOpen);
      };

  const [formdata, setFormData ] = useState({
    name:'',
    email:'',
    password:'',
    conformpassword:''
    
  });
  
  const [errors , setErrors]= useState({})

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formdata, [name]:value
    })
    console.log(formdata)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
      if(!formdata.name.trim()){
        validationErrors.name = "name is required"
      }
      if(!formdata.email.trim()){
        validationErrors.email = "email is required"
      }else if(!/\S+@\S+\.\S+/.test(formdata.email)){
        validationErrors.email = "email is not valid"

      }
      if(!formdata.password.trim()){
        validationErrors.password = "password is required"
      }else if(formdata.password.length < 8 ){
        validationErrors.email = "password should be at least 9 characters "

      }
      if(formdata.conformpassword !== formdata.password){
        validationErrors.conformpassword = "password did not match"
      }

      setErrors(validationErrors)

      if(Object.keys(validationErrors).length === 0){
        alert("Form Submitted successfully")
      }

  }

  return (
    <div>
        <form onSubmit={handleSubmit}  >
        <div className=' text-left w-[50%] p-12 border-r-4'>
            <div className='ml-[10%] '>
                <div>
                    <a  className='m-10'>Academy Student Sign Up</a>
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Name</span>
                    <input type='text' name='name' placeholder='Name Text' className='w-[150px] h-[30px] border-solid border-2 border-gray-700' value={formdata.name}  onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Email</span>
                    <input type='email' name='email' placeholder='Email' className='w-[200px] h-[30px] border-solid border-2 border-gray-700' value={formdata.email} onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Password</span>
                    <input type='password' name='password' placeholder='*******' className='w-[200px] h-[30px] border-solid border-2 border-gray-700' value={formdata.password}  onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Conform Password</span>
                    <input type='password' name='conformpassword' placeholder='********' className='w-[200px] h-[30px] border-solid border-2 border-gray-700' value={formdata.conformpassword} onChange={handleChange}/>
                    {errors.conformpassword && <span>{errors.conformpassword}</span>}
                 </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Date of Grad</span>
                    <DatePicker onChange={onChange} value={value} />
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Github</span>
                    <input type='text' placeholder='Username' className='w-[200px] h-[30px] border-solid border-2 border-gray-700'/>
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Website</span>
                    <input type='text' placeholder='URL' className='w-[200px] h-[30px] border-solid border-2 border-gray-700'/>
                </div>
                <div className='mt-[20px]'>
                    <span className='mr-[10px]'>Bio</span>
                    <input type='text' placeholder='Free TextField' className='w-[250px] h-[80px] border-solid border-2 border-gray-700'/>
                </div>
                

            </div>

        </div>
        <div className=' text-right w-[76%] mt-[-500px]'>
        <span className=''>Field of interest</span>
        <div className=" pl-[20px] relative inline-block  text-center">
            
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

        <div className='mt-[20px] '>
                    <span className='mr-[10px]'>Seeking</span>
                    <input type='text' placeholder='Free TextField' className=' overflow-y-auto w-[120px] h-[120px] border-solid border-2 border-gray-700'/>
                </div>
        <div className='mt-[20px] '>
                    <span className='mr-[10px]'>Tech Stack</span>
                    <input type='text' placeholder='Free TextField' className=' overflow-y-auto w-[120px] h-[120px]  border-solid border-2 border-gray-700'/>
                </div>
                <div className='mt-[20px]'>
                <button className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600' >Delete</button>
              <button className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600'>Save Change</button>
              </div>    
            

        </div>
        </form>
       
    </div>
  )
}

export default SingupMain