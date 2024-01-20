import UseData from '../apis/usehook'



const DataGrids = ({seachitem}) => {
  const {data, isLoading} = UseData()
  const filters = seachitem


  
  console.log('1',data)
 console.log(isLoading)
 // console.log(isFetching)
  console.log(data)
    
  var items = []
     items = data

  if(isLoading){
    return(
      <div>Loading.....</div>
    )
  }    
  
  return (
    
     
        <div className='mt-[50px]'>
      <div className=' ml-[15%] block overflow-y-auto overflow-x-auto w-[80%] h-[500px] ' >
       
          
          { items.filter((item)=>{
            return filters.toLowerCase() ==='' ? item : item.name.toLowerCase().includes(filters.toLowerCase())|| 
            item.bio.toLowerCase().includes(filters.toLowerCase());
          }).map((item) => (
             <div key='#' className='w-[80%] h-[170px] border-solid border-2 border-gray-700  m-[10px]'>
    
       
             <div className=' m-2 w-[120px] h-[120px]   border-solid border-2 border-gray-700 inline-block '>
             <img src={item.gravatar} className='cover' alt='img#'/>
             <div className='ml-[170px] mt-[-100px]'>
               <p className='w-[200px] '>{item.name}</p>
               <p className='w-[350px] mt-[10px]'>Front End Web Developer</p>
             
               <div className=' mt-[20px] border-solid border-2 border-b-4 border-gray-700 w-[300px] h-[40px]'>
                <div className='  bg-blue-300 border-gray-700 border-solid border-r-2 p-2 w-fit  h-[34px]'>
                 <div className=''>Java Script</div>
                 </div>
                 
                 <div className=' ml-[100px] mt-[-36px] px-4 p-2  border-gray-700 border-solid border-r-2 w-fit  h-[38px]'>HTML / CSS3</div>
                 <div className='ml-[230px]  mt-[-38px] px-4 p-2  border-gray-700 border-solid border-r-2 w-fit  h-[38px]'>Ruby</div>
            
                
           </div>
           </div>
      
           </div>
           <div className='ml-[65%] mt-[-8rem]'>
           <button className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600'>Delete </button>
           <button className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600' >DM Student</button>
            <button className='w-fit m-[5px] px-2 border-solid border-2  border-b-4 border-r-4 border-gray-600'>View profile</button>
           </div>
           </div>
            
          ))}
         
          </div>
          </div>
          
           
  
        
        
    
  )
}

export default DataGrids