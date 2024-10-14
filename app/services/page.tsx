import React from 'react';
import { BackgroundBeamsWithCollisionDemo } from '../_components/arora';
import { LampDemo } from '../_components/Lamp';
import { TimelineDemo } from '../_components/Workingprocess';



const page = () => {
    return <div>
        <BackgroundBeamsWithCollisionDemo/>
        <LampDemo/>
        <TimelineDemo/>
        <hr className='mt-10' />
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font font-unbounded text-center text-5xl mb-4 font-bold text-gray-900">We deliver All services World-Wide</h1>
      
      
    
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-4">
      <img src="/images/worldwide.jpg" alt="" />
      
    </div>
  </div>
</section>
       
        
        
    </div>;
}



export default page;