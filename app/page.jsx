import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
   <section className="w-full flex-center flex-col" >
   <h1 className="head_text text-center" > Discover & Share
       <br className="max-md:hidden" />
       <span className=" green_gradient text-center" >
        AI-Powered Prompts
       </span>
       </h1>
       <p className='desc text-center' >
           open-source AI prompting tool to share creative prompts
       </p>

         <Feed />
   </section>
  )
}

export default Home