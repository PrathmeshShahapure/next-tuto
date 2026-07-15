

const Comments = async() => {
 

  await new Promise(resolve => setTimeout(() => { resolve(" loading wait ") }, 4000)) 
       
  return (
    <div className='w-1/2 border flex justify-center items-center min-h-screen'>Comments</div>
  )
}

export default Comments