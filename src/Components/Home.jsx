import React from 'react'
import useFetch from './custom-hook/useFetch'

const Home = () => {
  return (
    <div>                    
      <p className='homeHeader'>
        Welcome to the Home page of the application !!</p> {/* the next content */}
       <div className="mainContainer">
         <div className="box leftBox">
          <p>The content will be show here!!!</p>
        </div>
        <div className="box middleBox">
          Middle Content
        </div>
        <div className="box rightBox">
          Right Content
        </div>
        </div>
       </div>
  )
}
export default Home