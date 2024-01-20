import {  useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const Goto = () => {
    navigate("/signup")

  }
  const Goto2 = () => {
    navigate("/")

  }
  
  return (
    <section>
    <div>
        <div className=' w-full bg-white h-[80px]  justify-between z-20  relative'>
            <div className='mt-[25px]'>
                <span className=' p-6 font-bold text-2xl ml-[30px] cursor-pointer' onClick={Goto2}>LOGO</span>
                <div  className='ml-[60%] mt-[-25px] justify-between right-0 cursor-pointer'>
                <span className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600'>Browse Student </span>
                <span className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600' onClick={Goto}>Edit Profile</span>
                <span className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600'>logout</span>
                </div>
            </div>
        </div>
        
    </div>
    </section>
  )
}

export default Navbar