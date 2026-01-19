import React from 'react'

const Header = (props) => {

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    // console.log(props.changeUser);
    
    props.changeUser('')
    
    // window.location.reload()
  }
  
  return (
    <div className='flex justify-between items-end'>
        <h1 className='font-medium text-2xl'>Hello<br /><span className='font-semibold text-3xl'>Jeevan 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 px-3 py-2 rounded outline-none border-none cursor-pointer font-medium'>Log Out</button>
    </div>
  )
}

export default Header